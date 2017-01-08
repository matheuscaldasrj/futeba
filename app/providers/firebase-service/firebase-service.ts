import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.


@Injectable()
export class FireBaseService {
  private appUrl: string = "https://probable-sprite-137223.firebaseio.com/";
  data: any;

  constructor(private _http: Http) {
    this.data = null;
  }


  post(urlToAppend : string, object : Object)
  {
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this._http.post(this.appUrl + "/" + urlToAppend  + ".json",  JSON.stringify(object))
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });

  }


  //first load
  load(urlToAppend : string)  {
//    if (this.data) {
      // already loaded data
//    return Promise.resolve(this.data);
//    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this._http.get(this.appUrl + urlToAppend +  ".json")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
