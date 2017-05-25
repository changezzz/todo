 import { Category } from '../category/category';

export class Blog{
	public id: number;
	public createTime: Date;
	public lastTime: Date;
	public name: string;
	public category: Category;

	constructor(
		id: number,
	 	createTime: Date,
	 	lastTime: Date,
	 	name: string,
	 	category: Category
		){
		this.id = id;
		this.category = category;
		this.createTime = createTime;
		this.lastTime = lastTime;
		this.name = name;
	}
}