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
      new Product(1, 'http://ic.pics.livejournal.com/missis_pomidor/75357704/605358/605358_original.jpg', 'Book Harry Potter', 'Fantasy', 100),
      new Product(2, 'https://vignette1.wikia.nocookie.net/lotr/images/6/65/One_Ring_Render.png', 'Ring', 'One Ring', 200),
      new Product(3, 'http://www.ikea.com/gb/en/images/products/%C3%A4ngland-table-lamp__0385322_pe558444_s5.jpg', 'Lamp', 'Daily Light', 50),
      new Product(4, 'http://images.all-free-download.com/images/graphicthumb/beautiful_flowers_highdefinition_picture_166906.jpg', 'Flowers card', 'Roses', 40),
      new Product(5, 'http://img0.liveinternet.ru/images/attach/c/0//44/90/44090692_1242914903_9f5298b125c8.jpg', 'Teddy bear', 'Fantazy', 100),
      new Product(6, 'http://www.publy.ru/wp-content/uploads/2016/08/158141982457a72d15608773.67597217.jpg', 'Book Sherlock Holmes', 'Detective', 120),
      new Product(7, 'https://image.freepik.com/free-vector/writting-pencil-design_1095-187.jpg', 'Pencil', 'red', 20),
    ]);  
  }

}
