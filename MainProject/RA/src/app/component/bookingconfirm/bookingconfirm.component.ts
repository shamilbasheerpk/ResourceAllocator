import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { booking } from 'src/app/model/booking.model';
import {LocalStorageService} from "angular-web-storage" ;

@Component({
  selector: 'app-bookingconfirm',
  templateUrl: './bookingconfirm.component.html',
  styleUrls: ['./bookingconfirm.component.css']
})
export class BookingconfirmComponent implements OnInit {
  book;
  key="value";
  
  key1="city";
  key2="lab";
  key3="date";
 
  constructor(private bookingService: BookingService,public local:LocalStorageService) { }
  cityname=this.local.get(this.key1);
  labname=this.local.get(this.key2);
  datename=this.local.get(this.key3);

  booking = new booking("pending",this.local.get(this.key), null, null, this.local.get(this.key1), this.local.get(this.key2), this.local.get(this.key3));

  
  

  ngOnInit() {}
    
    
    booker() {
      console.log(this.booking);
      
      this.bookingService.booker(this.booking).subscribe((data) => {
        this.book = JSON.parse(JSON.stringify(data));
        // window.location.href="/books";
        // console.log(this.booking)
        // alert("Success");
        if (this.book != null) {
          alert("booking success  ")
          window.location.href = "/user";
        }
        else if (this.book == null) {
          alert("Error Occured,try again after some times");
          window.location.href = "/user";
        }
  
      })
    }
    redrt(){
      window.location.href="/user";
    }
  
  }
 


