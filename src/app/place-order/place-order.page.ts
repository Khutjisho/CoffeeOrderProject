import { Component, OnInit } from '@angular/core';
import { CoffeeOrderService } from '../Service/coffee-order.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

newOrder
CID
Sugar
Milk
Quantity
Sugarp
Milkp
Quantityp
namep
idp
totalpricep


  constructor(public coService: CoffeeOrderService, public route: ActivatedRoute) { 
    // this.newOrder = this.coService.getOrders()
    this.newOrder= this.coService.getName()
  }

  ngOnInit() {
this.route.paramMap.subscribe(params=>{this.CID=params.get('CID')
this.newOrder=this.coService.ViewCategory(this.CID)
this.totalpricep=this.newOrder.Price
})
   }

  PlaceOrder(){
    this.coService.PlaceOrder(this.Sugarp, this.Milkp,this.Quantityp ,this.namep, this.idp, this.totalpricep)
    // this.newOrder=this.coService.ViewCategory(this.CID)
  }

  ViewCategory(CID){
    this.coService.ViewCategory(CID)
  }
  ViewOrderNumber(ID){
    this.newOrder= this.coService.ViewOrderNumber(ID)
  }
  getSugar(event){
    this.Sugar= event.detail.value
    console.log(this.Sugar);
    
  }

  getMilk(event){
    this.Milk = event.detail.value
    console.log(this.Milk);
    
  }

  getQuantity(event){
    this.Quantity = event.detail.value
    this.getTotalPrice()
    
  }

  getTotalPrice(){
    this.totalpricep=this.newOrder.Price
    this.totalpricep= this.totalpricep*this.Quantityp
  }

  getName(){
    this.coService.getName()
  }

  getCategoryName(Catnamez){
    this.coService.getCategoryName(Catnamez)
  }
}
