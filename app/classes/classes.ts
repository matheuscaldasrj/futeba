export class Game {
    name: string;
    time: string;
    date: string;
    repeatWeekly: boolean;
    minPlayers: number;
    totalPrice: number;

  constructor(
    name: string,
    date: string,
    repeatWeekly: boolean,
    minPlayers: number,
    totalPrice: number) {

      this.name = name;
      this.date = date;
      this.repeatWeekly = repeatWeekly;
      this.minPlayers = minPlayers;
      this.totalPrice = totalPrice;
  }

}
export class User {
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
