import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestadoListaComponent } from '../servico-prestado-lista/servico-prestado-lista.component';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response)
  }

  onSubmit() {
    /*if(this.servico) {

       this.servicoPrestadoService
        .atualizar(this.servico)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.success = false;
          this.errors = ['Erro ao atualizar o Serviço Prestado!'];
        }) 

    } else {*/

      this.servicoPrestadoService
        .salvar(this.servico)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.servico = new ServicoPrestado();
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    

  }


}
