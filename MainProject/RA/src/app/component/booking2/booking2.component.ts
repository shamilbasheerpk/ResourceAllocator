import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-web-storage" ;
import { BookingService } from 'src/app/services/booking.service'; 



@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.component.html',
  styleUrls: ['./booking2.component.css']
})
export class Booking2Component implements OnInit {
  
  key="city";

  constructor(public local:LocalStorageService,private BookingService:BookingService ) { }
  

  ngOnInit() {
  }
  citychooser(item){
    this.local.set(this.key,item);
    window.location.href='booking3';
     
    console.log(item);


  }

}
