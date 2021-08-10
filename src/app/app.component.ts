import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './components/add-Dialog/add-Dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DelDialogComponent } from './components/del-dialog/del-dialog.component';
import { DataServiceService } from './data-service.service';
import { User } from './models/issue';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public usersData: User[] = [];

  displayedColumns =
      ['id', 'name', 'email', 'phone', 'city', 'star'];


  constructor (public _dataService: DataServiceService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.usersData = this._dataService.getUsersData();
    //console.log(this.usersData);
  }  

  @ViewChild(MatTable) table!: MatTable<User>;


  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {data: {user: User}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1) {
        //console.log(this.usersData);
        this.usersData.push(this._dataService.getDialogData());
        //console.log(this._dataService.getDialogData());
        //console.log(this.usersData);
        //console.log('Dialog result: $result');
      }
      this.table.renderRows();
    });
  }

  editData(editUser: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {data: {user: editUser}});

    dialogRef.afterClosed().subscribe(result => {
      if(result === 1) {
        const foundIndex = this.usersData.indexOf(editUser);
        //console.log(foundIndex);
        //console.log(this._dataService.getDialogData().user);
        this.usersData[foundIndex] = this._dataService.getDialogData().user;
        //console.log(this.usersData);
        //console.log('Dialog result: $result');
      }
      this.table.renderRows();
    });
  }

  deleteData(delUser: any) {
    const dialogRef = this.dialog.open(DelDialogComponent, {data: {user: delUser}});
  
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1) {
        const foundIndex = this.usersData.indexOf(delUser);
        //console.log(foundIndex);
        this.usersData.splice(foundIndex,1);
        //console.log(this.usersData);
        //console.log('Dialog result: $result');
      }
      this.table.renderRows();
    });
  }
  

}


