import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[] = [new Ingredient("Choclate",2)];
  constructor() { }

  ngOnInit() {
  }

}
