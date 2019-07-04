import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-shipping-prices',
  templateUrl: './shipping-prices.component.html',
  styleUrls: ['./shipping-prices.component.css']
})
export class ShippingPricesComponent implements OnInit {
  shippingCost;
  constructor(private cartService: CartService) {
    this.shippingCost = this.cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}