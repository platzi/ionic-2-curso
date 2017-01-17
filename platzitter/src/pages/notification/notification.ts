import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Notifications } from '../../commons/notification';
import { VerNotificationPage } from './verNotification';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {


  notifications:Array<Notifications> = [
      {id:1, action: 'reply', img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {id:2, action: 'replatzitt', img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {id:3, action: 'mention', img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];

  constructor(public navCtrl: NavController) {

  }

  /*
    verNotification(_id:number){
      this.navCtrl.push(VerNotificationPage, {
        id: _id
      });
    }
  */

  verNotification(_notification:Notifications){
    this.navCtrl.push(VerNotificationPage, {
      id: _notification
    });
  }

}

