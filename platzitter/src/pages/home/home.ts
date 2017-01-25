import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Twitt } from '../../commons/twitt';

import { UserService } from '../../services/user.service';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado: FirebaseListObservable<any>;

  /*listado:Array<Twitt> = [
      {img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', nick_name:'@freddier', text:'platzitter es lo mas'},
      {img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];*/

  constructor(
      public navCtrl: NavController, 
      private userService: UserService,
      public database: AngularFireDatabase
      ) {
        this.listado = this.database.list('/twitts');
        this.listado.push({
          img:'https://pbs.twimg.com/profile_images/635135056336523264/Zoe8kLQX_400x400.jpg', 
          nick_name:'@freddier', 
          text:'platzitter es lo mas',
          retwits:0,
          reply:0,
          fav:0
        });
        this.listado.push({
          img:'https://pbs.twimg.com/profile_images/703539825853464577/jppQNmXD_400x400.jpg', nick_name:'@cvander', text:'que chulo que esta esta app en iOS',
            retwits:0,
            reply:0,
            fav:0
        });
        this.listado.push({
          img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', 
          nick_name:'@jorgeucano', 
          text:'test 1234',
            retwits:0,
            reply:0,
            fav:0
        });
  }
  
  onFav(response: string) {
    console.log(response);
  }
  



}
