import { Injectable } from '@angular/core';

import { HttpClient,HttpResponse } from '@angular/common/http';    //http 
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  

  constructor(private http:HttpClient) { }
  // getBooks(){
  //   return this.http.get("http://localhost:3050/books");
  // }

  adminloader(){
    return this.http.get("http://localhost:3500/booking/adminloader");
  }

  


  userloader(item){                   //user logger

    
    console.log("service called for logger" + item);
    
    return this.http.put("http://localhost:3500/booking/userloader",{"userloader":item});
  }


  bookerchecker(item){                   //booker funtion for booking
    
    return this.http.put("http://localhost:3500/booking/checkuserbooking",{"booking":item});
  }


  booker(item){                   //booker funtion for booking
    
    return this.http.put("http://localhost:3500/booking/userbooking",{"booking":item});

  }

  approve(data){
        console.log(data);
        return this.http.put("http://localhost:3500/booking/adminapprove",{"booking":data}).subscribe(data=>{console.log(data)});
  }

  reject(data){

    console.log(data);
    return this.http.put("http://localhost:3500/booking/adminreject",{"booking":data}).subscribe(data=>{console.log(data)});
  }
    remove(data){

      console.log(data);
      console.log("...........................deleting......................")
      return this.http.put("http://localhost:3500/booking/admindel",{"booking":data}).subscribe(data=>{console.log(data)});


    }
}