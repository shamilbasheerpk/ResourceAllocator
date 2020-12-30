import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { DatamoverService } from 'src/app/services/datamover.service';
import { booking } from 'src/app/model/booking.model';
import {LocalStorageService} from "angular-web-storage" 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  key="value";


  constructor(private bookingServices:BookingService,public local:LocalStorageService) { }
  booking;
  test:Object;
  name;
  userdta:boolean=true;
  total=0;
  pending=0;
  approved=0;
  rejected=0;
  approvedclass:boolean=true;
  detai:boolean=true;
  aprvdclass=[];
  
 
    ngOnInit():void{
      this.name=this.local.get(this.key)
      this.test={
        "name":this.local.get(this.key)
      }
      console.log(this.test);
    
      console.log("userlogger called");

      console.log(this.test);
      this.bookingServices.userloader(this.test).subscribe((data)=>{
        this.booking=JSON.parse(JSON.stringify(data));
        this.total=this.booking.length;
        this.booking.forEach(item => {

          if(item.status=="pending"){
            this.pending++;
          }
          else if(item.status=="Approved"){
            this.approved++;
            

          }
          else if(item.status=="Rejected"){
            this.rejected++;
          }
          
        });

       this.booking.forEach(element => {
         if(element.status=="Approved"){
           this.aprvdclass.push(element);

         }
          
        });
        
          
        console.log("//////////////////////");
        
        
        
      });
      
  
    };
    remove(data){


      this.bookingServices.remove(data);
      // window.location.href="/books";
      
      alert("booking deleted.reload to show the changes");

    }
  
    userdata(){
      this.userdta=false;
      this.approvedclass=true;
      this.detai=true;
    }
    uclass(){
      this.detai=true;

      this.userdta=true;
      this.approvedclass=false;

    }
    detail(){
      
      this.detai=false;
      this.userdta=true;
      this.approvedclass=true;
    }
    bookroom(){
      window.open(
        'booking2',
        '_blank'
      );
    }

    
    
    }


    