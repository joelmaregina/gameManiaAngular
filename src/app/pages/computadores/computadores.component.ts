import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {

  listaProdutos = [] as Produto[];

  produtoForm = {
    titulo: "Computador extra",
    descricao: "Descricao da noticia Extra"
  }

  constructor(private produtoService : ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(){
    this.produtoService.getProdutos().subscribe((produtosRecebidos: Produto[]) => 
    {this.listaProdutos = produtosRecebidos
      console.log(this.listaProdutos)
    })
  }

  salvarProduto(){
    this.produtoService.postProduto(this.produtoForm).subscribe(() => {
      this.carregarProdutos();
    })
  }

}
