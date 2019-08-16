import { Component } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDgckKEN7Sd4EYV9FbLXdT2yCg0Dure5K0",
      authDomain: "bookshelvesoc-12010.firebaseapp.com",
      databaseURL: "https://bookshelvesoc-12010.firebaseio.com",
      projectId: "bookshelvesoc-12010",
      storageBucket: "bookshelvesoc-12010.appspot.com",
      messagingSenderId: "945589189492",
      appId: "1:945589189492:web:92c597545c9b6529"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}