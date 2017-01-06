import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {GameCreationPage} from './pages/game-creation/game-creation';
import {FireBaseService} from './providers/firebase-service/firebase-service';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  pages: Array<{component: any, title: String, icon: String}>;

  items: Array<String>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page : any) : void {
    this.rootPage = page.component;
  }

}


ionicBootstrap(MyApp,[FireBaseService]);
