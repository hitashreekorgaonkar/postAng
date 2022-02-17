import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postsList: any;
  totalRecords: number;
  page: number = 1;

  constructor(
    private postService: PostService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private activatedroute: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.postService.getpostsList().subscribe(
      (res: any) => {
        console.log("res", res)
        console.log("totalRecords", this.totalRecords = res.length)
        console.log("booksList", this.postsList = res)
        this.spinner.hide();
      },
    )

  }

}
