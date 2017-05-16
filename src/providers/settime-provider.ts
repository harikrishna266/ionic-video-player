import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Injectable()
export class SettimeProvider {

  constructor(public http: Http) {
    console.log('Hello SettimeProvider Provider');
  }

  getTime() {
        return Observable
        .interval(1000) 
    }

}
