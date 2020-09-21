import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL = environment.apiURLBase + '/api/clientes';
  clientes:  Observable<Cliente[]>;
  cliente:  Observable<Cliente>;

  constructor(private http: HttpClient) { 
  }

  salvar( cliente: Cliente): Observable <Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar( cliente: Cliente): Observable <any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletar( cliente: Cliente): Observable <any> {
    return this.http.delete<Cliente>(`${this.apiURL}/${cliente.id}`);
  }

  getClientes(): Observable<Cliente[]> {
    this.clientes = this.http.get<Cliente[]>(`${this.apiURL}`);
    return this.clientes;
  } 
  
  getClientesById(id: number): Observable<Cliente> {
    this.cliente = this.http.get<any>(`${this.apiURL}/${id}`);
    console.log(id);
    return this.cliente;
  } 
}
