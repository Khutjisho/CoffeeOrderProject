import { Component, OnInit } from '@angular/core';
import { CoffeeOrderService } from '../Service/coffee-order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

 newcategories
  constructor(public coService:CoffeeOrderService) {
    this.newcategories = coService.getCategories()
  }

  ngOnInit() {
  }

}
