import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler }  from 'ionic-angular';
import { MyApp } from './app.component';

import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { VerNotificationPage } from '../pages/notification/verNotification';

import  { Fav } from '../components/fav/fav';

import { UserService } from '../services/user.service';
import { DBService } from '../services/db.service';

//refactor para router

var links = [
  { component: LoginPage, name: 'Login', segment:'login'},
  { component: TabsPage, name: 'tabs', segment: 'tabs' },
  { component: VerNotificationPage, name: 'notification', segment: 'notification/:id' }
];

@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    VerNotificationPage,
    Fav
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, links )
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
    Fav
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserService, DBService]
})
export class AppModule {}
