import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = "http://localhost:3000/produtos"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getProdutos (): Observable<Produto[]> {
  return this.httpClient.get<Produto[]>(this.url)
  }
}