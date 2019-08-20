import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription

  constructor(
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onLove(i) {
    this.posts[i].loveIts += 1;
    this.postsService.savePosts();
  }

  onDont(i) {
    this.posts[i].loveIts -= 1;
    this.postsService.savePosts();
  }

  getColor(i) {
    if (this.posts[i].loveIts > 0) {
      return "#5CB85C";
    } else if (this.posts[i].loveIts < 0) {
      return "#D9534F";
    }
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
