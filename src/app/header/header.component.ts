import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service'
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  userName: any;
  ticks = 0;
  switch: Array<string> = ['Bonjour', 'Salut', 'Merci', 'Au revoir', 'Bye'];
  private subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 3000);
    this.subscription = timer.subscribe(t => this.ticks = t);
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          this.userName = user.email.charAt(0).toUpperCase() + user.email.substring(1).split('@')[0];
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  showWord() {
    return this.switch[this.ticks % 5];
  }

  onSignOut() {
    this.authService.signOutUser()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
