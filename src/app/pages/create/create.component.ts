import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { imageValidator } from '../../validators/image';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RoutePaths } from '../../consts/route-paths';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  productForm: FormGroup;
  product: Product;
  productSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams.id;

    this.productForm = this.fb.group({
      image: ['', [Validators.required, imageValidator]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required]
    });

    if (id == null) {
      this.product = new Product();
    } else {
      this.productSubscription = 
        this.productService.products
          .subscribe((products) => {
            this.product = this.productService.getProductById(id);
            this.productForm.setValue({
              image: this.product.image,
              title: this.product.title,
              description: this.product.description,
              price: this.product.price
            });
          });
    }

    this.productForm.valueChanges
    .subscribe(value => 
      Object.assign(this.product, value)
    );
  }

  submit() {
    if(this.productForm.invalid) {
      return
    }

    if(this.product.id == null) {
      this.productService.setProduct(this.product);
    } else {
      this.productService.updateProduct(this.product);
    }

    this.goBack();
  }

  goBack() {
    this.router.navigate([RoutePaths.main]);
  }

  ngOnDestroy() {
    if(this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
