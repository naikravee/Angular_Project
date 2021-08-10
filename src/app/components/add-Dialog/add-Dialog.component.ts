import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
import { User } from 'src/app/models/issue';


@Component({
  selector: 'app-add-Dialog',
  templateUrl: './add-Dialog.component.html',
  styleUrls: ['./add-Dialog.component.css']
})

export class AddDialogComponent implements OnInit {

  public usersData: User[] = [];

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    public _dataService: DataServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  formControl = new FormControl('', [
    Validators.required,
    //Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
      '';
  }

  submit() {
  // emppty stuff
  }

  confirmAdd(): void {
    this._dataService.addIssue(this.data);
  }

  cancelAdd(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.usersData = this._dataService.getUsersData();
  }

}


