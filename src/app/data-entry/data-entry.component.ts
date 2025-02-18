import { Component, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'data-entry',
  templateUrl: './data-entry.component.html'
})

export class DataEntryComponent implements AfterViewInit {

  @ViewChild('myCanvas') finalCanvas: any;  
  @Output() clickEventEmitter = new EventEmitter<String>();

  fileToUpload: File | null = null;

  public context: CanvasRenderingContext2D;

  title = 'ADSGROUPS18';
  loading = true;
  url:any;
  profileUrl:any;
  image : any;
  backgroundImage: any;
  profileImage: any;

  studentFormControl = new FormControl('');

  //-----> STUDENT DATA
  schoolName = 'TKM College';
  studentName = '';
  admissionNumber = '';
  studentClass = '';
  dateOfBirth = '';
  studentContactNumber = '';
  studentBloodGroup = '';

  constructor() {
    this.loading = true;
    console.log("data-entry component constructor");
  }

  ngAfterViewInit() {
    console.log("data-entry component ngAfterViewInit");
    this.loading = false; 
    //this.finalImage = document.getElementById('finalImage');
    this.context = (<HTMLCanvasElement>this.finalCanvas.nativeElement).getContext('2d');
  }

  backClicked(){
    console.log("-----> backClicked!")
    this.clickEventEmitter.emit("Clicked");
  }

  processFile(event) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;        
        var newImage = new Image();
        var localContext = this.context;
        newImage.onload = function() {
          localContext.drawImage(newImage, 0, 0, newImage.width, newImage.height);
        }
        newImage.src = this.url;
      }      
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  processProfileImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = event.target.files[0];
    }
  }

  process(event:any) {
    if (this.studentName == "" ||
      this.admissionNumber == "" ||
      this.studentClass == "" ||
      this.dateOfBirth == "" ||
      this.studentContactNumber == "" ||
      this.studentBloodGroup == ""
    ) {
      alert("Missing data. Please enter data in all fields: Student Name, Class, Admn No, DOB, Contact Number, Blood Group");
    } else {
      if (this.fileToUpload == null) {
        alert("Missing profile picture. Please select a picture by clicking the 'Choose file' button");
      } else {
        this.saveStudentData();
      }
    }

  }

  saveStudentData() {
    // call api to save



  }

  clearData (event:any) {
    this.studentName = '';
    this.admissionNumber = '';
    this.studentClass = '';
    this.dateOfBirth = '';
    this.studentContactNumber = '';
    this.studentBloodGroup = '';
  }
}
