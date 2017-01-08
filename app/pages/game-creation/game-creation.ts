import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Game } from './../../classes/classes';
import { User } from './../../classes/classes';
import {FireBaseService} from './../../providers/firebase-service/firebase-service';

@Component({
  templateUrl: 'build/pages/game-creation/game-creation.html',
})
export class GameCreationPage {

  name: string;
  date: string = new Date().toISOString();
  repeatWeekly: boolean;
  minPlayers: number;
  totalPrice: number;


  constructor(private navController: NavController, private provider : FireBaseService) {
  }

  createNewGame() : void
  {
    let newGame =  new Game(this.name, new Date(this.date), this.repeatWeekly,this.minPlayers, this.totalPrice);
    this.provider.post("games",newGame);

    let response = this.provider.post(null,newGame).then(resp=> {
                  console.log(resp);

                });

      this.navController.pop();

  }


}
