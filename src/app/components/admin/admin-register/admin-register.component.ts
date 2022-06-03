import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterService } from 'src/app/services/admin-register.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(public adminRegService: AdminRegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  onClear(){
    this.adminRegService.adminForm.reset()
    this.adminRegService.initializeFormGroup()
  }

  onSubmit(){
      if(this.adminRegService.adminForm.valid){
        this.adminRegService.insertAdmin(this.adminRegService.adminForm.value)
        .subscribe(res => {
          console.log(res)
          localStorage.setItem('adminToken', res.token)
          this._router.navigate(['/admin/adminDashboard'])
        },
        err => {
          console.log("Error while receiving Response from Service: "+err)
        })
        this.adminRegService.adminForm.reset()
        this.adminRegService.initializeFormGroup()
      }
  }
}
