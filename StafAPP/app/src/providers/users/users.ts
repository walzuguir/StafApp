import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo);

    seq.subscribe((res: any) => {
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo);

    seq.subscribe((res: any) => {
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp: { user: any; }) {
    this._user = resp.user;
  }

  profile_update(){
    var profileDetails = [
      {
        full_name: "Sibabrat Swain",
        about: "I am working in NTT . ",
        profile_image: "asset/img/src/img.jpg",

        followers: 230,
        following: 170,

        user_name: "sibabratswain",
        password: 'July 8, 1954',
        email: 'sibabrat.swain@constacloud.net',
        state: 'Odisha',
      },
    ];
    return profileDetails;
  }
}
