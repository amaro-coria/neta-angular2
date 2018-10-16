import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-neta-registro',
  templateUrl: './neta-registro.component.html',
  styleUrls: ['./neta-registro.component.css']
})
export class NetaRegistroComponent implements OnInit {
  user = {
    'name' : '',
    'email' : '',
    'username' : '',
    'password' : '',
    'confirm' : ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this.user.name = f.value.name;
    this.user.email = f.value.email;
    this.user.username = f.value.username;
    this.user.password = f.value.password;
    this.user.confirm = f.value.confirm;
    console.log(this.user);
    //TODO enviar en peticion tipo POST
  }
}
