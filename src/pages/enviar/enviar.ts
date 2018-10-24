import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';  // Ojo
import {UserServiceProvider} from '../../providers/user-service/user-service';


/**
 * Generated class for the EnviarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enviar',
  templateUrl: 'enviar.html',
})
export class EnviarPage {

  persona = {
    'num_identificacion':'',
    'nombre':'',
    'direccion':'',
    'telefono':''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public miServiceEnviar: UserServiceProvider,
              public miStorage: Storage) {
                miStorage.get('entidad').then(
                  (val) =>{
                    this.persona=val;
                  }
                );
  }

  enviarPersonaNueva(){
    //this.miServiceEnviar.setChimenea(this.entidad); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviarPage');
  }

}
