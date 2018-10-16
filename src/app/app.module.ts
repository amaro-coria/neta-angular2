import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NetaMenuComponent } from './neta-menu/neta-menu.component';
import { NetaInicioComponent } from './neta-inicio/neta-inicio.component';
import { NetaNosotrosComponent } from './neta-nosotros/neta-nosotros.component';
import { NetaRegistroComponent } from './neta-registro/neta-registro.component';

const appRoutes: Routes = [
  {path : '', component : NetaInicioComponent},
  {path: 'nosotros', component: NetaNosotrosComponent},
  {path: 'registro', component: NetaRegistroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NetaMenuComponent,
    NetaInicioComponent,
    NetaNosotrosComponent,
    NetaRegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
