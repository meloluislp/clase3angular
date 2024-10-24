import { Injectable } from '@angular/core';
import  { products } from '../data'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProducts() {
    return products
  }

}
