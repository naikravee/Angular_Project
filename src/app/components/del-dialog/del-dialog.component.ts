import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/data-service.service';
import { User } from 'src/app/models/issue';


@Component({
  selector: 'app-del-dialog',
  templateUrl: './del-dialog.component.html',
  styleUrls: ['./del-dialog.component.css']
})
export class DelDialogComponent implements OnInit {

  public usersData: User[] = [];

  constructor(public dialogRef: MatDialogRef<DelDialogComponent>,
    private _dataService: DataServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.usersData = this._dataService.getUsersData();
  }

  confirmDelete(): void {
    this._dataService.deleteIssue(this.data.id);
  }

  cancelDel(): void {
    this.dialogRef.close();
  }

}
