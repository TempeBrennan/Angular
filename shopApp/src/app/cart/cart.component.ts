import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      //与 formControlName 对应
      name: '',
      address: ''
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(value): void {
    console.log(value);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
