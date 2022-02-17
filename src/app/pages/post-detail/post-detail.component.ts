import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostService } from 'src/app/services/post.service';
import { PostDetailDTO } from './post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: string;
  isUserLoggedIn: boolean;

  constructor(
    private activatedroute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.postId = this.activatedroute.snapshot.params["id"];
    console.log("productId", this.postId)
    this.getPostDetails(this.postId);
    console.log("this.isUserLoggedIn",this.isUserLoggedIn);

  }

  postDetail: PostDetailDTO;

  getPostDetails(id: string) {
    this.spinner.show();

    this.postService.getpostsDetails(id).subscribe(
      (res: any) => {
        console.log("res", res)
        console.log("res", this.postDetail = res)

        this.spinner.hide();
      },
    )

  }


}

