import { Component, OnInit } from '@angular/core';
import { NetaClienteService } from '../neta-services/neta-cliente.service';
import { Cliente } from '../common/cliente.model';

@Component({
  selector: 'app-neta-inicio',
  templateUrl: './neta-inicio.component.html',
  styleUrls: ['./neta-inicio.component.css'],
  providers: [NetaClienteService]
})
export class NetaInicioComponent implements OnInit {
  arrayClientes: Cliente[];
  constructor(private clienteService: NetaClienteService) { }

  ngOnInit() {
    this.clienteService.obtenerClientes().subscribe(
      (data: Cliente[])
        =>
      this.arrayClientes = data
    );
  }

}
