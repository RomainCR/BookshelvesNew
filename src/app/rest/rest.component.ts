import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-rest",
  templateUrl: "./rest.component.html",
  styleUrls: ["./rest.component.scss"]
})
@Injectable()
export class RestComponent implements OnInit {
  url: string = "https://api.pokemontcg.io/v1/cards";
  cards: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.url).subscribe(res => {
      this.cards = res.cards;
      console.log(res.cards[0], 'res');   
    });
  }

  onDelete(i) {
    console.log(this.cards);
    return this.cards.splice(i, 1);
  }

}
