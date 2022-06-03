import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InsertMobileService } from 'src/app/services/insert-mobile.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-mobiles',
  templateUrl: './admin-mobiles.component.html',
  styleUrls: ['./admin-mobiles.component.css']
})
export class AdminMobilesComponent implements OnInit {

  public mobiles = [
    {code: 1, name: "RealMe"},
    {code: 2, name: "OnePlus"},
    {code: 3, name: "VIVO"},

  ]
  imgURL: string = 'assets/mobiles/m1.png'
  constructor(public mobileService: InsertMobileService, private _router: Router, public notificationService: NotificationService, public dialogRef: MatDialogRef<AdminMobilesComponent>) { }

  ngOnInit(): void {
  }
  selectFile(event){
    if(event.target.files){
      let reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.imgURL = event.target.result
      }
    }
  }

  onClear(){
    this.mobileService.mobileForm.reset();
    this.mobileService.initializeFormGroup()
    this.dialogRef.close()
  }

  onSubmit(){
    if(this.mobileService.mobileForm.valid){

      if(!this.mobileService.mobileForm.get('_id').value)
       {
        this.mobileService.insertMobile(this.mobileService.mobileForm.value)
        .subscribe(res => {
          console.log(res)
          this._router.navigate(['/admin/adminMobiles'])
          this.notificationService.success('Record Inserted Successfully')
          this.onClear()
        },
        err => {
          console.log("Err: "+ err)
        })
        this.mobileService.mobileForm.reset()
        this.mobileService.initializeFormGroup()
        this.notificationService.success('Record inserted Successfully')
      }
       else{
         this.mobileService.updateMobile(this.mobileService.mobileForm.value)
         .subscribe(res => {
           this._router.navigate(['/admin/mobiles-list'])
         },
         err=>{
           console.log("Err: "+err)
         })
         this.onClear()
       }

  }
}

}
