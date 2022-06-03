import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  public mobiles = []
  public cartItems = []
  constructor(private _mobileService: MobileService, private _auth: AuthService) { }

  ngOnInit() {
    this._mobileService.getMobiles()
    .subscribe(res =>
      {
        console.log(res)
        this.mobiles = res
      }
     ,
      err => console.log(err))
  }

  increaseCount(product){
   // console.log(product)
   if(product.quantity >= 1){
    product.quantity++
   }

  }

  decreaseCount(product){
    if(product.quantity != 1){
      product.quantity--
     }
  }

  addToCart(product){
   let checkForNull = localStorage.getItem('myCart')
   if(checkForNull == null){
     let storageArray = []
     storageArray.push(product)
     localStorage.setItem('myCart', JSON.stringify(storageArray))
   }
   else{
     let id= product.pId
     let index = -1;
    this.cartItems = JSON.parse(localStorage.getItem('myCart'))

    for(let i = 0; i < this.cartItems.length ; i++){
      if(parseInt(id) === parseInt(this.cartItems[i].pId)){
        this.cartItems[i].quantity = product.quantity
        index = i
        break;
      }
     }
    if(index == -1){
this.cartItems.push(product)
localStorage.setItem('myCart', JSON.stringify(this.cartItems))

    }
    else{
      localStorage.setItem('myCart', JSON.stringify(this.cartItems))
    }

   }

   this.cartNumberFunction()
  }

cartNumber: number = 0;
cartNumberFunction(){
  let cartValue = JSON.parse(localStorage.getItem('myCart'))
  this.cartNumber = cartValue.length
  this._auth.cartSubject.next(this.cartNumber)
}

}
