import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormularioPage } from '../formulario/formulario';
import { IngresoPage } from '../ingreso/ingreso';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private miFormulario = FormularioPage;
  private miIngreso = IngresoPage;
  constructor(public navCtrl: NavController) {

  }

  irFormulario(){
    this.navCtrl.push(this.miFormulario);
  }

  irIngreso(){
    this.navCtrl.push(this.miIngreso);
  }

}
