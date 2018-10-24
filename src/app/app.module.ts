import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { EnviarPage } from '../pages/enviar/enviar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormularioPage,
    IngresoPage,
    EnviarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormularioPage,
    IngresoPage,
    EnviarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider   
  ]
})
export class AppModule {}
