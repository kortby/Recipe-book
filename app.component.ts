import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  page = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAA4LrzYg7K4MlTA37Wy3XoBGrYMuf4cvQ",
      authDomain: "recipe-book-c349d.firebaseapp.com",
    });
  }
  
  onNavigate(data: string){
      this.page = data;
  }

}
