import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { booking } from 'src/app/model/booking.model';
import {LocalStorageService} from "angular-web-storage" ;

@Component({
  selector: 'app-bookingdate',
  templateUrl: './bookingdate.component.html',
  styleUrls: ['./bookingdate.component.css']
})
export class BookingdateComponent implements OnInit {

  book;
  key="value";
  key1="city";
  key2="lab";
  key3="date";

  ngOnInit() {
  }

  constructor(private bookingService: BookingService,public local:LocalStorageService) { }
  
  booking = new booking("pending",this.local.get(this.key), null, null, this.local.get(this.key1), this.local.get(this.key2),null);
  
  booker() {
    console.log(this.booking);
    console.log()
    
    this.bookingService.bookerchecker(this.booking).subscribe((data) => {
      this.book = JSON.parse(JSON.stringify(data));
      // window.location.href="/books";
      // console.log(this.booking)
      // alert("Success");
      if (this.book != null) {
        this.local.set(this.key3,this.booking.date);
        console.log(this.local.get(this.key3));
          alert("available");
       
      }
      else if (this.book == null) {
        alert("date not available.. pick another date ");
        window.location.href = "/bookingdate";
      }

    })
  }
  redrt(){
    alert("proceeding without checking availablity may cause error ");
    window.location.href = "/bookingconfirm";
    
  }
}


