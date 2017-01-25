import { Component } from '@angular/core';
import { AlertController, LoadingController,NavController } from 'ionic-angular';
import {DBService} from '../../services/db.service';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-signin',
  template: `
    <img src="https://static.platzi.com/media/achievements/Badge-Ionic_1.png" />
    <h1>Login</h1>
    <ion-item>
        <ion-label color="primary" stacked>Email</ion-label>
        <ion-input [(ngModel)]="user.email" type="email" placeholder="Email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label color="primary" stacked>Password</ion-label>
        <ion-input [(ngModel)]="user.password" type="password" placeholder="Password"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label color="primary" stacked>Nick Name</ion-label>
        <ion-input [(ngModel)]="user.nick_name" type="text" placeholder="Nick Name"></ion-input>
    </ion-item>

    <button ion-button (tap)="crear()" color="secondary">Crear Cuenta</button>
  `
})
export class SignInPage {

    user = {"email": "", "password":"", img: "", nick_name: ""};

    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController, 
        public navCtrl: NavController,
        private dbService:DBService
        ) {
    }

    crear(){
        if (this.dbService.create(this.user)){
            this.navCtrl.push(TabsPage);
        }
        else{
            alert("Ocurrio un error");
        }
    }

    
}