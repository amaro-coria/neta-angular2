import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NetaClienteService {
  private urlGet = 'https://neta-seguros.free.beeceptor.com/clientes';
  constructor(private clienteHttp: HttpClient) {}

  obtenerClientes() {
    return this.clienteHttp.get(this.urlGet);
  }


}
