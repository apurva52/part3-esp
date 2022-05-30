import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './httpservice';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]

})

export class AppComponent implements OnInit {
 
  tabledata: any[] = [];
  selectedColumns: any[] = [];
  selectedProduct1:any;
 
  constructor(private http:HttpService) { 
    this.GetData()
  }
  GetData() {
    this.http.getData().subscribe((res: []) => {
      console.log(res);
      this.tabledata = res['cookies'];

    })
  }
  ngOnInit(): void {
  }
  
}
