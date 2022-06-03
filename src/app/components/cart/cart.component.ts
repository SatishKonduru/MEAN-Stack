import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cartDetails = []
public grandTotal = 0
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.getCartDetails()
    this.getGrandTotal()
  }

  getCartDetails(){
    if(localStorage.getItem('myCart')){
      this.cartDetails = JSON.parse(localStorage.getItem('myCart'))
    }
  }

  incrementCount(pId, pQty){
    for(let i = 0; i < this.cartDetails.length; i++){
      if(this.cartDetails[i].pId === pId){
        this.cartDetails[i].quantity = parseInt(pQty) + 1
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.cartDetails))
    this.getGrandTotal()
  }

  decrementCount(pId, pQty){
    for(let i = 0; i < this.cartDetails.length ; i++){
      if( pId === this.cartDetails[i].pId){
        if(pQty > 1){
          this.cartDetails[i].quantity = parseInt(pQty) - 1
        }
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.cartDetails))
    this.getGrandTotal()
  }

  getGrandTotal(){
    if(localStorage.getItem('myCart')){
      this.cartDetails = JSON.parse(localStorage.getItem('myCart'))
      this.grandTotal = this.cartDetails.reduce((key, value)=>{
      return  key+(value.amt * value.quantity)
      }, 0)
    }
    localStorage.setItem('gTotal', this.grandTotal.toString())
  }

  removeAll(){
    localStorage.removeItem('myCart')
    this.cartDetails = []
    this.grandTotal = 0
  }

  singleDelete(pId){
    if(localStorage.getItem('myCart')){
      this.cartDetails = JSON.parse(localStorage.getItem('myCart'))
      for(let i=0; i < this.cartDetails.length; i++){
        if(parseInt(this.cartDetails[i].pId) === parseInt(pId)){
          console.log("TEST")
          this.cartDetails.splice(i, 1)
          localStorage.setItem('myCart', JSON.stringify(this.cartDetails))
          this.getGrandTotal()
          this._auth.cartSubject.next(this.cartDetails.length)
        }
      }
    }
  }

}
