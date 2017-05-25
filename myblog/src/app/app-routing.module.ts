import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
	{ path:'', redirectTo:'/', pathMatch:'full'},
	{ path:'home', component: HomeComponent },
	{ path:'category', component: CategoryComponent },
	{ path:'tag', component: TagComponent },
	{ path:'category/:id', component:BlogComponent }
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
 export class AppRoutingModule{

 }