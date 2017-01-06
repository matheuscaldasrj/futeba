import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Teste } from './../../classes/classes';

@Component({
  templateUrl: 'build/pages/game-creation/game-creation.html',
})
export class GameCreationPage {

  name: string;
  time: Object;
  date: Object;
  repeatWeekly: boolean;
  minPlayers: number;
  totalPrice: number;


  constructor(private nav: NavController) {

  }


  createNewGame() : void
  {
    console.log("Vamos criar nova partida");
    let user = new Teste("joao","14");
    console.log("Ola mundo");
    console.log(user);

  }


}
