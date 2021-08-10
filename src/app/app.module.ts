import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { AddDialogComponent } from './components/add-Dialog/add-Dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DelDialogComponent } from './components/del-dialog/del-dialog.component';
import { DataServiceService } from './data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddDialogComponent,
    EditDialogComponent,
    DelDialogComponent
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DelDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
