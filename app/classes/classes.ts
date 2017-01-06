export class Game {
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
