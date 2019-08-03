import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Ser/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: [];
  data: any;
  formlist: FormGroup;
  userlist: FormGroup;
  id: any;

  constructor(private apiservice: SharedService, private fb: FormBuilder) { }

  ngOnInit() {

    this.formlist = this.fb.group({
      name: [],
      age: [],
      salary: []
    })
    this.userlist = this.fb.group({
      name: [],
      age: [],
      salary: []
    })
    this.getData();
    this.apiservice.reSetComponent.subscribe((dat: any) => {
      this.userData = [];
      this.getData();
    })
    this.apiservice.refreshReportList.subscribe((data:any) => {
      this.userData = [];
      this.getData();

    })
     this.apiservice.refreshQueriesList.subscribe((data:any) => {
      this.userData = [];
      this.getData();
    })

  };


  getData() {
    this.apiservice.getData().subscribe((data: any) => {
      this.userData = data;
      console.log(this.userData)
    })
  }

  saveData() {
    console.log(this.formlist.value)
    this.apiservice.saveData(this.formlist.value).subscribe((data: any) => {
      this.apiservice.refreshReportList.emit(true);
    })
  };
  delete(id) {
    this.apiservice.delete(id).subscribe((data: any) => {
      this.apiservice.reSetComponent.emit(true);
    })
  };
  idU(id) {
    this.id = id;
    console.log(this.id)

  }
  update() {
    console.log(this.userlist.value)
    this.apiservice.update(this.id, this.userlist.value).subscribe((data: any) => {
      this.apiservice.refreshQueriesList.emit(true);

    })
  }


}



