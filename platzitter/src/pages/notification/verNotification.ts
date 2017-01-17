import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Notifications } from '../../commons/notification';

@Component({
  selector: 'ver-notification',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Notificacion
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
        <ion-thumbnail item-left>
          <img src="{{notification.img}}">
        </ion-thumbnail>
        <h5>{{notification.action}}</h5>
        <h2>{{notification.nick_name}}</h2>
        <p>{{notification.text}}</p>
    </ion-content>
  `
})
export class VerNotificationPage {

    notification = {};
/*
    notifications:Array<Notifications> = [
      {id:1, action: 'reply', img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {id:2, action: 'replatzitt', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {id:3, action: 'mention', img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];


    constructor(private navParams: NavParams) {
        let _id = navParams.get('id');
        console.log(_id);
        this.notification = this.notifications.find(_id);
      this.notification = this.notification[0];
    }
*/

  constructor (private navParams: NavParams){
    this.notification = navParams.get('id');
  }





}