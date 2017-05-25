import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogId: Observable<number>;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  	) { 
  	console.log("构造")
    	console.log(this.blogId);
	}

  ngOnInit() {
  	this.route.params
    	.switchMap((params: Params) => {
    		this.blogId = params['id'];
    		console.log(this.blogId);
    		return this.blogId;
    	});
    	console.log("初始");
    console.log(this.blogId);
  }

}
