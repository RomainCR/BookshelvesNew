export class Post {
  photo: string;
  loveIts: number = 0;
  created: string = new Date().toString();
  content: string;
  constructor(public title: string, public author: string) {
    
  }
}