import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-rest",
  templateUrl: "./rest.component.html",
  styleUrls: ["./rest.component.scss"]
})
@Injectable()
export class RestComponent implements OnInit {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  posts: {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get(this.url).subscribe(res => {
      this.posts = res;
      console.log(typeof res, 'res');   
    });
  }

  // onDelete(i) {
  //   this.posts = this.posts.filter(post => i === i);
  //   console.log(this.posts); 
  // }

}
