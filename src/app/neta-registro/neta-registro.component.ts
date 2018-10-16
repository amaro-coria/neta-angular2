import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-neta-registro',
  templateUrl: './neta-registro.component.html',
  styleUrls: ['./neta-registro.component.css']
})
export class NetaRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
      console.log(f);
  }
}
