import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { DataEntryComponent } from './data-entry/data-entry.component';

const appRoutes: Routes = [
  { path: 'coming-soon', component: DataEntryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ), 
  BrowserModule, 
  FormsModule, 
  ReactiveFormsModule, 
  HttpClientModule, 
  MatDialogModule,
  BrowserAnimationsModule,
  DemoMaterialModule,
  NgbModule],
  declarations: [AppComponent, 
    DataEntryComponent],
  entryComponents: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
