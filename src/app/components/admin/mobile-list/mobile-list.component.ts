import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetMobilesService } from 'src/app/services/get-mobiles.service';
import { InsertMobileService } from 'src/app/services/insert-mobile.service';
import { AdminMobilesComponent } from '../admin-mobiles/admin-mobiles.component';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
public listData : MatTableDataSource<any>;

displayedColumns: string[] = ['mobileName', 'mobileModel', 'price', 'color', 'actions']
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private _getMobiles: GetMobilesService, private _insertService: InsertMobileService, public dialog: MatDialog) { }
public searchKey : string;
  ngOnInit() {
    this._getMobiles.getMobiles()
    .subscribe(mobilesList => {
      this.listData = mobilesList
      this.listData = new MatTableDataSource(mobilesList)
      this.listData.sort = this.sort
      this.listData.paginator = this.paginator
    }
      )

  }

  onSearchClear(){
    this.searchKey = ''
    this.applyFilter()
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase()
  }


  onCreate(){
    this._insertService.initializeFormGroup()
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="90%"
    this.dialog.open(AdminMobilesComponent, dialogConfig)
  }

  onEdit(row){
    this._insertService.populateForm(row)
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="90%"
    this.dialog.open(AdminMobilesComponent, dialogConfig)
  }

  onDelete(id){
    this._insertService.deleteMobile(id)
    .subscribe(res=> console.log(res))
  }
}
