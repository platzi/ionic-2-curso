import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'fav',
    templateUrl: 'fav.html'
})
export class Fav {
  @Input() id: number;

  @Output() onFav = new EventEmitter<string>();

  test = "";
  icon = "ios-heart-outline";
  
  alerta(){
      if (this.test == ""){
        this.test = "primary";
        this.icon = "ios-heart";
      }
      else{
        this.test = "";
        this.icon = "ios-heart-outline";
      }
      this.onFav.emit("gracias por hacer fav");
  }


}