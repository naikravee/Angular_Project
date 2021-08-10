import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/data-service.service';
import { User } from 'src/app/models/issue';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  public usersData: User[] = [];

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    private _dataService: DataServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  formControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
      '';
  }

  submit() {
  // empty stuff
  }

  confirmEdit(): void {
    this._dataService.updateIssue(this.data);
  }

  ngOnInit(): void {
    this.usersData = this._dataService.getUsersData();
  }

}
