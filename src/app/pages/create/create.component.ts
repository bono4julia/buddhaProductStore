import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;
  product: Product;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams.id;
    
    this.product = (id == null)
      ? new Product()
      : this.productService.getProductById(id);

    this.productForm = this.fb.group({
      title: [this.product.title, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required]
    });

    this.productForm.valueChanges
      .subscribe(value => 
        Object.assign(this.product, value)
      )
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
    this.location.back();
  }
}
