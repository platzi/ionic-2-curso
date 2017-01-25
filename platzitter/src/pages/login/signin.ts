import { Component } from '@angular/core';
import { AlertController, LoadingController,NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';


@Component({
  selector: 'page-signin',
  template: `
    <img src="https://static.platzi.com/media/achievements/Badge-Ionic_1.png" />
    <h1>Login</h1>
    <ion-item>
        <ion-label color="primary" stacked>Email</ion-label>
        <ion-input [(ngModel)]="_user.email" type="email" placeholder="Email"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label color="primary" stacked>Password</ion-label>
        <ion-input [(ngModel)]="_user.password" type="password" placeholder="Password"></ion-input>
    </ion-item>

    <ion-item>
        <ion-label color="primary" stacked>Nick Name</ion-label>
        <ion-input [(ngModel)]="_user.nick_name" type="text" placeholder="Nick Name"></ion-input>
    </ion-item>

    <button ion-button (tap)="crear()" color="secondary">Crear Cuenta</button>
  `
})
export class SignInPage {

    _user = {"email": "", "password":"", img: "", nick_name: ""};

    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController, 
        public navCtrl: NavController,
        public auth: Auth, 
        public user: User
        ) {
    }

    

    crear(){
        let details: UserDetails = {
            'email': this._user.email, 
            'password': this._user.password        
        };
        this.auth.signup(details).then(() => {
            this.navCtrl.push(TabsPage);
            }, (err: IDetailedError<string[]>) => {
            for (let e of err.details) {
                if (e === 'conflict_email') {
                alert('Email already exists.');
                } else {
                    console.log(e);
                }
            }
        });
    }

    
}