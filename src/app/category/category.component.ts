import { Component, OnInit } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products = products;
  categoryDisplay(category_id) {
    products[category_id].display = !products[category_id].display;
  }
  likeItem(category_id, id) {
    products[category_id].items[id].likes += 1;
  }
  removeItem(category_id, id) {
    products[category_id].items.splice(id, 1);
    for (var i = id; i < products[category_id].items.length; i++) {
      products[category_id].items[i].id = i;
    }
  }

  ngOnInit(): void {
  }

}
