import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  urlClientes = 'http://localhost:8080/api/clientes';
  clientes:  Observable<Cliente[]>;
  cliente:  Observable<Cliente>;

  constructor(private http: HttpClient) { 
  }

  salvar( cliente: Cliente): Observable <Cliente> {
    return this.http.post<Cliente>(this.urlClientes, cliente);
  }

  atualizar( cliente: Cliente): Observable <any> {
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  deletar( cliente: Cliente): Observable <any> {
    return this.http.delete<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }

  getClientes(): Observable<Cliente[]> {
    this.clientes = this.http.get<Cliente[]>(this.urlClientes);
    return this.clientes;
  } 
  
  getClientesById(id: number): Observable<Cliente> {
    this.cliente = this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
    console.log(id);
    return this.cliente;
  } 
}
