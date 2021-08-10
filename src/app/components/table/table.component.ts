import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

//import usersData from '../../files/users.json';

const usersData = [  
  {  
    "id": 1,
    "name": "Jack",  
    "email": "jack@gmail.com", 
    "city": "Mumbai",
    "phone": 123456789  
  },
  { 
    "id": 2,
    "name": "Rose",  
    "email": "rose@gmail.com",  
    "city": "Delhi",
    "phone": 123456789  
  },
  {  
    "id": 3,
    "name": "Matthew",  
    "email": "matt@gmail.com",  
    "city": "Bangalore",
    "phone": 123456789  
  }
]


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns =
      ['id', 'name', 'email', 'phone', 'city', 'star'];
  public dataSource = usersData;

  public id= "";
  public name= "";
  public email= "";
  public city= "";
  public phone= "";
  public userRecord: object= [];
  getDataFromForm($event: object) {
    this.userRecord = $event; 
    //console.log(this.userRecord); 
    this.table.renderRows();
  }

  constructor(
    public dialog: MatDialog,
  ) {

   }

  ngOnInit(): void {
  }

  public usersList: User[] = usersData;  
  

  @ViewChild(MatTable)
  table!: MatTable<User>;

  // editData(editUser: any) {
    
  //   this.id = editUser.id;
  //   this.name = editUser.name;
  //   this.email = editUser.email;
  //   this.city = editUser.city;
  //   this.phone = editUser.phone;

  // }

  addNew(user: any) {

  }

  deleteData(delUser: any) {
    //console.log(delUser);
    const index = usersData.indexOf(delUser);
    //console.log(index);
    usersData.splice(index,1);
    this.table.renderRows();
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
  phone: any;
}


