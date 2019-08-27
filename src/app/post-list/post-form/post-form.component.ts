import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from "../../models/post.model";
import { Router } from "@angular/router";
import { PostsService } from "src/app/services/posts.service";
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  userName: any="plouk";

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.userName = user.email.charAt(0).toUpperCase() + user.email.substring(1).toLowerCase().split('@')[0];
        } else {
          this.userName = 'Nope';
        }
      }
    );
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }

  onSavePost() {
    const title = this.postForm.get("title").value;
    const author = this.userName;
    const content = this.postForm.get("content").value;
    const newPost = new Post(title, author);
    newPost.content = content;
    if (this.fileUrl && this.fileUrl !== "") {
      newPost.photo = this.fileUrl;
    }
    this.postsService.createNewPost(newPost);
    this.router.navigate(["/posts"]);
  }
  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.postsService.uploadFile(file).then((url: string) => {
      this.fileUrl = url;
      this.fileIsUploading = false;
      this.fileUploaded = true;
    });
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
