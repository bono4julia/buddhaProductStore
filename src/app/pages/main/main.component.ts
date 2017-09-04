import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RoutePaths } from '../../consts/route-paths';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelectProduct(id: number) {
    this.router.navigate([RoutePaths.details, id]);
  }

  onCreateProduct() {
    this.router.navigate([RoutePaths.create], { queryParams: { id: null } });
  }

  onDeleteProduct(id: number) {
    const answer = confirm('Do you want delete product?');

    if(!answer) {
      return
    }

    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  onEditProduct(id: number) {
    this.router.navigate([RoutePaths.create], { queryParams: { id } })
  }
}
