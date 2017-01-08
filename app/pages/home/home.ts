import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

//Providers
import {FireBaseService} from './../../providers/firebase-service/firebase-service';

//Pages
import {GameCreationPage} from './../game-creation/game-creation';
import {GameDetailsPage} from './../game-details/game-details';


//Classes
import { Game } from './../../classes/classes';
import { User } from './../../classes/classes';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  games: Array<Object>;
  users: Array<Object>;


  constructor(
    private navController: NavController,
    private provider : FireBaseService) {

  }

  ionViewDidEnter(){
      this.loadGames();
  }

  loadGames(): void {
    let data = this.provider.load("games")
                .then(resp=> {
                  this.games = this.convertToGameArray(resp);
                });
  }

  loadUsers(): void {
    let data = this.provider.load("users")
                .then(resp=> {
                  this.users = this.convertToUserArray(resp);
                });
  }

  convertToGameArray(object: Object) : Game[]
  {
    var unsorted = object;
    var keys = Object.keys(unsorted);
    var array = [];
    for (var j=0; j < keys.length; j++) {


      //creating Game
      let myGame = unsorted[keys[j]];
      let game = new Game(myGame.name, new Date(myGame.date), myGame.repeatWeekly,myGame.minPlayers, myGame.totalPrice);
      array[j] = game;
    }

    return array;
  }

  createNewGame() : void{
    this.navController.push(GameCreationPage);
  }

  gameDetails() : void {
    this.navController.push(GameDetailsPage);
    console.log("Vamos aos detalhes");

  }


  convertToUserArray(object: Object) : User[]
  {
    var unsorted = object;
    var keys = Object.keys(unsorted);
    var array = [];
    for (var j=0; j < keys.length; j++) {

      //just to get the name in database
      console.log(unsorted[keys[j]]);
      for (var name in unsorted[keys[j]]) break;

      //creating Game
      let myUser = unsorted[keys[j]][name];
      console.log(myUser);

      let user = new User(name, myUser.nome, myUser.apelido, myUser.idade);

      console.log(user);
      array[j] = user;
    }

    return array;
  }

}
