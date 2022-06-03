import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cartItem: number = 0
  constructor(public authService: AuthService){
    this.authService.cartSubject.subscribe(res => this.cartItem = res)
  }
// parentMsg = "Hi this is Parent to Child communication"
// myMsg;

ngOnInit() {
  this.cartItemFunction()

}
cartItemFunction(){
  if(localStorage.getItem('myCart') != null){
    let cartCount = JSON.parse(localStorage.getItem('myCart'))
    this.cartItem = cartCount.length
  }
}
}
