import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/services/home-page.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
public home = []
  constructor(private _homePageService: HomePageService ) { }

  ngOnInit() {
    this._homePageService.getHomePage()
    .subscribe(res => {
this.home = res,
err => console.log(`Error while receiving res from Service: ${err}`)
    })
  }

}
