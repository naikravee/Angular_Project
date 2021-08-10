import { Injectable } from '@angular/core';
import { User } from './components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  dialogData: any;

  getUsersData() {
    return [
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
    ];
  }

  getDialogData() {
    return this.dialogData;
  }

  addIssue (issue: User): void {
    this.dialogData = issue;
  }

  updateIssue (issue: User): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }

}
