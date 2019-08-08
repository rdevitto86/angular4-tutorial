import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  /**
   * @function ProductDetailsComponent#constructor
   * @description - builds a ProductDetailsComponent object
   * @param {class} route - angular navigation router
   */
  constructor(private route: ActivatedRoute, private cartService: CartService) { 

  }

  /**
   * @function ProductDetailsComponent#ngOnInit
   * @description - handles preShow functionality before executing the component
   * @see https://angular.io/start/routing
   */
  ngOnInit() {
    //subscribes component to an action event
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product = {}) {
    window.alert('Your product has been added to the cart');
    this.cartService.addToCart(product);
  }
}