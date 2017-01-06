import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {FireBaseService} from './../../providers/firebase-service/firebase-service';
import {GameCreationPage} from './../game-creation/game-creation';

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

      //just to get the name in database
      for (var name in unsorted[keys[j]]) break;

      //creating Game
      let myGame = unsorted[keys[j]][name];
      let game = new Game(name,  myGame.day, myGame.time, myGame.price);

      array[j] = game;
    }

    return array;
  }

  createNewGame() : void{
    alert("Cheguei");
    this.navController.push(GameCreationPage);
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


class Game {
    name: string;
    day: string;
    time: string;
    price: number;

  constructor(name: string, day: string,  time: string, price: number) {
      this.name = name;
      this.day = day;
      this.time = time;
      this.price = price;

  }

}


class User {
    name: string;
    nameDb: string;
    nickname: string;
    age: number;

  constructor(nameDb: string, name: string, nickname: string, age: number) {
      this.name = name;
      this.nickname = nickname;
      this.age = age;
      this.nameDb = nameDb;
  }

}
