import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Classes
import { Game } from './../../classes/classes';

/*
  Generated class for the GameDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/game-details/game-details.html',
})
export class GameDetailsPage {

  game: Game;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.game = navParams.get("game");

  }
}
