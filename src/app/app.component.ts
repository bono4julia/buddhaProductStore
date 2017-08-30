import { Component, OnInit } from '@angular/core';

import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.initProducts([
      new Product(1, '', 'Book Harry Potter', 'Fantasy', 100),
      new Product(2, '', 'Ring', 'One Ring', 200),
      new Product(3, '', 'Lamp', 'Daily Light', 50),
      new Product(4, '', 'Flowers card', 'Roses', 40),
      new Product(5, '', 'Teddy bear', 'Fantazy', 100),
      new Product(6, '', 'Book Sherlock Holmes', 'Detective', 120),
      new Product(7, '', 'Pencil', 'red', 20),
    ]);  
  }

}
