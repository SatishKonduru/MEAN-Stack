import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public grandTotal = 0;
  cartItems = 0

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.getGrandTotal()
  }

  getGrandTotal(){
    if(localStorage.getItem('gTotal')){
     this.grandTotal = parseInt(localStorage.getItem('gTotal'))
    }
  }
  placeOrder(){
    localStorage.removeItem('gTotal');
    localStorage.removeItem('myCart')
    this._auth.cartSubject.next(this.cartItems)
    this._router.navigate(['/home'])
  }
}
