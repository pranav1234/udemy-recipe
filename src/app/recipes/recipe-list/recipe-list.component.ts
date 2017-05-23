import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('a test recipe', ' this is simple a test','http://images.media-allrecipes.com/images/56299.jpg')
]
  constructor() { }

  ngOnInit() {
  }

}
