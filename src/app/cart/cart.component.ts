import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    const cartList = this.cartService.getItems();
    if(cartList && cartList.constructor === Array) {
      this.items = cartList;
    }

    //builds a new form object
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {

  }

  /**
   * @function CartComponent#onSubmit
   * @description - submits the form and resets the cart
   */
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}