import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //url variável criada para armazenar o endereço da API
  url = "http://localhost:3000/produtos"

  //Insere a dependencia HttpClient
  constructor(private httpClient: HttpClient) { }

  //Variável que armazena as configurações dos Headers da requisição
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  //Método get que vai trazer os produtos da API
  getProdutos (): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
  }

  // postProduto (produto: Produto): Observable<Produto> {
  //   return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions )
  // }
}