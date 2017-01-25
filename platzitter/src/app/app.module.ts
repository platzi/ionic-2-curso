import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler }  from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { VerNotificationPage } from '../pages/notification/verNotification';
import { SignInPage } from '../pages/login/signin';
import  { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service';
import { DBService } from '../services/db.service';

var links = [
  { component: LoginPage, name: 'Login', segment:'login'},
  { component: TabsPage, name: 'tabs', segment: 'tabs' },
  { component: VerNotificationPage, name: 'notification', segment: 'notification/:id' }
];


//FIREBASE
import { AngularFireModule } from 'angularfire2';
export const CONFIG = {
    apiKey: "AIzaSyCzZ6AwE3LQWWBU1yjMy2jjBLOvucLvn6M",
    authDomain: "hale-monument-147419.firebaseapp.com",
    databaseURL: "https://hale-monument-147419.firebaseio.com",
    storageBucket: "hale-monument-147419.appspot.com",
    messagingSenderId: "194685471560"
  };
  

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const CLOUDSETTINGS: CloudSettings = {
  'core':{
    'app_id': 'f501a6f1'
  },
  'push': {
    'sender_id': '194685471560',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};



@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav,
    SignInPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, links ),
    AngularFireModule.initializeApp(CONFIG),
    CloudModule.forRoot(CLOUDSETTINGS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    LoginPage,
    HomePage,
    TabsPage,
    VerNotificationPage,
    Fav,
    SignInPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    UserService,
    DBService
    ]
})
export class AppModule {}
