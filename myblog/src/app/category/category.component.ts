import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { Blog } from '../blog/blog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public blogs: Blog[];

  constructor() { }

  ngOnInit() {
  	this.getAllBlogs();
  }

  getAllBlogs(): void{

  	this.blogs = [
  		new Blog(1,new Date(),new Date(),'blog',null),
  		new Blog(2,new Date(),new Date(),'blog',null),
  		new Blog(3,new Date(),new Date(),'blog',null)
  	];
  
  }


}
