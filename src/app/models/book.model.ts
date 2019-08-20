export class Book {
  photo: string;
  synopsis?: string;
  loveIts: number = 0;
  created: string = new Date().toString()
  constructor(public title: string, public author: string) {
    
  }
}