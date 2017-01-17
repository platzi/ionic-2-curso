import { Component } from '@angular/core';

import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    user = {"email": "", "password":""};

    constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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
                
                // mensaje de error
                let alert = this.alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Login correcto',
                    buttons: ['Aceptar']
                });
                alert.present();
            }, 5000);
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