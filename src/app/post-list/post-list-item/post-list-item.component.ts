import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book.model';
import { Subscription } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  books: Book[];
  booksSubscription: Subscription

  constructor(
    private booksService: BooksService,
    private router: Router) { }


  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
  }

  onLove(i) {
    this.books[i].loveIts += 1;
    console.log(this.books[i].loveIts);
    this.booksService.saveBooks();
  }

  onDont(i) {
    this.books[i].loveIts -= 1;
    console.log(this.books[i].loveIts);
    this.booksService.saveBooks();
  }

  getColor(i) {
    if (this.books[i].loveIts > 0) {
      return "green";
    } else if (this.books[i].loveIts < 0) {
      return "red";
    }
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
