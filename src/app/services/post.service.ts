import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  getpostsList() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
  
  getpostsDetails(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/`+ id);
  }
  
  getPostsImages() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }

}
