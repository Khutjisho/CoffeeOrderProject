import { Component, OnInit } from '@angular/core';
import { CoffeeOrderService } from '../Service/coffee-order.service';

@Component({
  selector: 'app-oders',
  templateUrl: './oders.page.html',
  styleUrls: ['./oders.page.scss'],
})
export class OdersPage implements OnInit {

  newpoOrder
  ID
  constructor(public coService:CoffeeOrderService) { 
    this.newpoOrder = this.coService.getOrders()}


 
  ngOnInit() {
  }

}
