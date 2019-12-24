import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.shippingCosts = this.http.get('/assets/shipping.json');
    console.log("shippingCosts type: " + typeof this.shippingCosts);
    console.log("shippingCosts count: " + Object.keys(this.shippingCosts).length);
  }

}