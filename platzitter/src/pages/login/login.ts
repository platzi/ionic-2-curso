import { Component } from '@angular/core';

import { AlertController, LoadingController,NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    user = {"email": "", "password":""};

    constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController) {
    }

    ngOnInit(){
        console.log("arranco el init");
        //si el usuario esta logueado redireccionar a la home
    }

    login = ():void=>{
        if (this.user.email != "" && this.user.password != ""){
            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            setTimeout(() => {
                loading.dismiss();
                
                this.navCtrl.push(TabsPage);
                
            }, 2000);
        }
        else{
            let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Usuario y/o contraseña invalida.',
                buttons: ['Aceptar']
            });
            alert.present();
            
        }

       
    }


    signIn = ():void=>{
        alert("signIn");
    }


}