import { Injectable } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoffeeOrderService {
 

  constructor() { }

Orders=[]
Catergories=[{Cimage: "Cappuccino.jpg",CID: 1, Name:"Cappuccino", Price: 26}, {Cimage:"Latte.jpg",CID:2,Name:"Latté", Price:30}, 
            {Cimage:"Espresso.jpg",CID:3, Name:"Espresso", Price:23}, {Cimage:"CaffeeMocha.jpg",CID:4, Name:"Caffé Mocha", Price:48},
            {Cimage:"PlainCoffee.jpg",CID:5, Name:"Plain Coffee", Price:15}]

// CID: number
poOrderID:number
poSugar: number
poMilk: boolean
poQuantity: number
// Sugar
// Price
namez
CPrice
Cname
TotalPrice

getOrders(){
  return this.Orders
}

getCategories(){
  return this.Catergories
}

PlaceOrder(poorderid, namez, sugar, milk, quantity, price){
  this.Orders.push({poOrderID:poorderid, namez:name, poSugar:sugar,poMilk:milk, poQuantity:quantity,Price:price})
}

ViewCategory(CID){
  let selectedCategoryID = []
  this.Catergories.forEach(category=>
    {
      if (category.CID == CID)
      {
        selectedCategoryID= category
      }
    })
    return selectedCategoryID
}

ViewOrderNumber(ID){
  let selectedOrderNumber=[]
  this.Orders.forEach(newOder=>
    {
      if(this.newOrder== ID)
      {
        selectedOrderNumber = newOder
      }
    })
return selectedOrderNumber
}

getName(){
return this.namez
}

getCategoryName(Catnamez){
  this.Cname = Catnamez.namez
  this.CPrice = Catnamez.Price
}

// getSugar(event){
//   this.Sugar= event.detail.value
// }
// getQuantity(event){
//   this.Quantity=event.detail.value
// }

// getMilk(event){
//   this.Milk = event.detail.value
// }

getTotalPrice(poQuantity){
  this.TotalPrice=this.CPrice*this.poQuantity

  return this.TotalPrice
}

getPrice(){
  return this.CPrice
}

}