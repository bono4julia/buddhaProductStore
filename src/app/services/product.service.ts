import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  initProducts(products: Product[]) {
    localStorage.setItem('dataProducts', JSON.stringify(products));
  }

  getProducts(): Product[] {
    return JSON.parse(localStorage.getItem('dataProducts'));
  }

  getProductById(id): Product {
    return this.getProducts().find((item) => {
      return item.id == id;
    });
  }

  setProduct(product: Product) {
    const products = this.getProducts();

    product.id = this.getNewId();
    products.push(product);

    localStorage.setItem('dataProducts', JSON.stringify(products));
  }

  updateProduct(product: Product) {
    const products = this.getProducts();
    const index = products.findIndex(item => item.id == product.id);

    products[index] = product;

    localStorage.setItem('dataProducts', JSON.stringify(products));
  }

  getNewId(): number {
    const ids = this.getProducts().map((product) => {
      return product.id;
    });

    return Math.max(...ids) + 1;

  }

  deleteProduct(id: number) {
    const products = this.getProducts().filter((item) => {
      return item.id != id;
    });
    
    localStorage.setItem('dataProducts', JSON.stringify(products));
  }

}
