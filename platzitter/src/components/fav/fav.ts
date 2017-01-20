import { Component, Input } from '@angular/core';

@Component({
    selector: 'fav',
    templateUrl: 'fav.html'
})
export class Fav {
  @Input() id: number;

  test = "";
  icon = "ios-heart-outline";

  alerta(){
      this.test = "primary";
      this.icon = "ios-heart";
      alert(this.id);
  }


}