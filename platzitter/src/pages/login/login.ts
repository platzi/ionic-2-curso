import { Component } from '@angular/core';

import { AlertController, LoadingController,NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignInPage } from './signin';
import { UserService } from '../../services/user.service';
import {Geolocation} from 'ionic-native';

import { AdMob } from 'ionic-native';


import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    _user = {"email": "", "password":""};

    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController, 
        public navCtrl: NavController,
        private userService: UserService,
        private AdMob: AdMob,
        public auth: Auth, 
        public user: User
        ) {
    }

    ionViewWillEnter(){
        console.log("arranco el init");
        
        Geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        let watch = Geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        });

        // to stop watching
        watch.unsubscribe();

         AdMob.prepareInterstitial('test-banner')
            .then(() => { AdMob.showInterstitial(); });
    }

    loginFacebook = ():void=>{
        this.auth.login('facebook').then(
            (response)=>{
                console.log(response);
                const full_name = this.user.social.facebook.data.full_name;
                const profile_picture = this.user.social.facebook.data.profile_picture;
                const facebook_raw_data = this.user.social.facebook.data.raw_data;
            }
        );
    }

    login = ():void=>{
        if (this._user.email != "" && this._user.password != ""){

            let usuarios;

            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();

        
            let details = {'email': this._user.email, 'password': this._user.password};

            this.auth.login('basic', details).then(
                
                (response)=>{
                    loading.dismiss();
                    console.log(response);
                    this.navCtrl.push(TabsPage);
                }, (err) => {
                        loading.dismiss();
                        let alert = this.alertCtrl.create({
                            title: 'Login',
                            subTitle: 'Usuario y/o contraseña invalida',
                            buttons: ['Aceptar']
                        });
                        alert.present();
                        console.log(err);
                    }
                );
                
        }
        else{
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Debe completar el usuario y contraseña',
                buttons: ['Aceptar']
            });
            alert.present();
        }  
    }

    signIn = ():void=>{
        this.navCtrl.push(SignInPage);
    }
}