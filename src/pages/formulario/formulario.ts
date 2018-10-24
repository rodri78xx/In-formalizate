import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';  // Ojo
import { AlertController } from 'ionic-angular';
import { EnviarPage } from '../enviar/enviar';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  private miEnviar = EnviarPage;

  persona = {
    'num_identificacion':'',
    'nombre':'',
    'direccion':'',
    'telefono':''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private confirmar: AlertController,
              public miStorage: Storage) {
                this.miStorage.set('miVariable', 'Este es el valor');
                this.miStorage.get('miVariable').then((val) => {
                  console.log(val);
                }
              );                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  irForma(){
    console.log("Confirmar envio de informacion");
    //this.navCtrl.push(this.miContaminacion);
              
    let alert = this.confirmar.create({
      title: 'Confirmar',
      message: 'Desea enviar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Escogio No');
          }
        },
        {
          text: 'SI',
          handler: () => {
            console.log('Buy clicked');
            //this.navCtrl.push(this.miContaminacion);
            this.enviarPersona();
          }
        }
      ]
    });
    alert.present();
  }

  private enviarPersona(){
    console.log(this.persona);
    this.miStorage.set('entidad',this.persona).then(
      (data) =>{
        console.log(data);
        this.navCtrl.push(this.miEnviar);
      }
    );
    //this.miStorage.get()
  }

}
