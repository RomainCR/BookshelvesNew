import { Component } from "@angular/core";
import * as firebase from "firebase";
import "firebase/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCRi4RrzbhtBeBuXdGZSvz3ffXKRuJWLqI",
      authDomain: "blogocabbe.firebaseapp.com",
      databaseURL: "https://blogocabbe.firebaseio.com",
      projectId: "blogocabbe",
      storageBucket: "blogocabbe.appspot.com",
      messagingSenderId: "647763192849",
      appId: "1:647763192849:web:1a9cb4201fbdbc6c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
