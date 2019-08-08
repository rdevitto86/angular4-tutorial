import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) { 

  }

  /**
   * @function CartService#addToCart
   * @description - adds a product to the shopping cart
   * @param {Object} - a user selected product
   */
  addToCart(product = {}) {
    if(product === {}) {
      console.log('cannot add empty product to list');
      return;
    }
    this.items.push(product);
  }

  /**
   * @function CartService#getShippingPrices
   * @description - fetches a list of shipping items
   * @returns {Object} - shipping options
   */
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  /**
   * @function CartService#getItems
   * @description - getter function for the shopping cart list
   * @returns {Array}
   */
  getItems() { 
    return this.items; 
  }

  /**
   * @function CartService#clearCart
   * @description - removes all items from the shopping CartService
   * @returns {Array}
   */
  clearCart() {
    this.items = [];
    return this.items;
  }
}