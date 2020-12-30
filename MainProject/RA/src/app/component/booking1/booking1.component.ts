import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { booking } from 'src/app/model/booking.model';
import {LocalStorageService} from "angular-web-storage" ;

@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.css']
})
export class Booking1Component implements OnInit {
  book;
  key="value";
  

  ngOnInit() {
    
    
  }



  constructor(private bookingService: BookingService,public local:LocalStorageService) { }
  
  booking = new booking("pending",this.local.get(this.key), null, null, null, null, null);
  
  booker() {
    console.log(this.booking);
    
    this.bookingService.booker(this.booking).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
      // window.location.href="/books";
      // console.log(this.booking)
      // alert("Success");
      if (this.book != null) {
        alert("booking success status is pending ")
        window.location.href = "/user";
      }
      else if (this.book == null) {
        alert("already booked for this date ! try again");
        window.location.href = "/booking1";
      }

    })
  }
}