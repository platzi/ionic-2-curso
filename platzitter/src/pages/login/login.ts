import { Component } from '@angular/core';

import { AlertController, LoadingController,NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    user = {"email": "", "password":""};

    constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController, 
        public navCtrl: NavController,
        private userService: UserService
        ) {
    }

    ngOnInit(){
        console.log("arranco el init");
        //si el usuario esta logueado redireccionar a la home
    }

    login = ():void=>{
        if (this.user.email != "" && this.user.password != ""){

            let usuarios;

            /*
            this.userService.getUser().then(
                function(users){
                    usuarios = users;
                    console.log(usuarios);
                }
            );
            */
            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();

            let login = false;
            this.userService.loginUser(this.user.email, this.user.password).then(
                (response)=>{
                    console.log(response);
                    loading.dismiss();
                    if(response !== undefined){
                        this.navCtrl.push(TabsPage);
                    }
                    else{
                        let alert = this.alertCtrl.create({
                                        title: 'Login',
                                        subTitle: 'Usuario y/o contraseña invalida',
                                        buttons: ['Aceptar']
                                    });
                        alert.present();
                    }
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
        alert("signIn");
    }
}