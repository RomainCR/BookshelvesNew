export class Book {
  photo: string;
  synopsis?: string;
  loveIts: number = 0;
  constructor(public title: string, public author: string) {
    
  }
}