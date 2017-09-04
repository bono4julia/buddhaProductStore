import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RoutePaths } from '../../consts/route-paths';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  products: Product[];
  productSubscription: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productSubscription = this.productService.products
      .subscribe(products => 
        this.products = products
    )
  }

  onDeleteProduct(id: number) {
    const answer = confirm('Do you want delete product?');

    if(!answer) {
      return
    }

    this.productService.deleteProduct(id);
  }

  onEditProduct(id: number) {
    this.router.navigate([RoutePaths.create], { queryParams: { id } })
  }

  onSelectProduct(id: number) {
    this.router.navigate([RoutePaths.details, id]);
  }

  onCreateProduct() {
    this.router.navigate([RoutePaths.create], { queryParams: { id: null } });
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
