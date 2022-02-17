import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.css']
})
export class PostImagesComponent implements OnInit {

  totalRecords: number;
  totalRecords2: number;
  page: number = 1;
  postImages = [];
  selectImages = [];
  listImages = [];

  constructor(
    private spinner: NgxSpinnerService,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getPostImages();
    console.log("select", this.selectImages);
  }

  getPostImages() {
    this.spinner.show();

    this.postService.getPostsImages().subscribe(
      (res: any) => {
        console.log("res", res)
        console.log("totalRecords", this.totalRecords = res.length)
        console.log("res images", this.postImages = res)
        console.log("res images", this.listImages = res)

        this.spinner.hide();
      },
    )
  }

  adde(event) {
    console.log(event);
    this.selectImages.push(event)
    console.log("res images",this.totalRecords2 = this.selectImages.length);
  }


}


