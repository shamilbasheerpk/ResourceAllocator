import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { booking } from 'src/app/model/booking.model';
import { AccountService } from 'src/app/services/account.service';       //booking service import


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  istrue:boolean=true;

  constructor(private bookingServices:BookingService,private AccountService:AccountService) { }
  booking;
  user;
  usrpermissionmgt:boolean=false;
  usermgr:boolean=true;
  regswitch:boolean=true;
  totalbooking=0;
  totaluser=0;
  pendingcount=0;
  tvmrqst:boolean=true;
  cltrqst:boolean=true;
  tcrrqst:boolean=true;
  cltarr=[];
  tvmarr=[];
  tcrarr=[];

  
  
  
    ngOnInit():void {
      
  this.bookingServices.adminloader().subscribe((data)=>{
    this.booking=JSON.parse(JSON.stringify(data));
    this.totalbooking=this.booking.length;
  this.booking.forEach(item=> {
    if(item.status=="pending"){
      this.pendingcount++;
    }
   
      
    });
    this.booking.forEach(item=> {
      if(item.location=="TVM"){
        this.tvmarr.push(item);
      }
      else if(item.location=="CLT"){
        this.cltarr.push(item);
      }
      else if(item.location=="TCR"){
        this.tcrarr.push(item);
      }
     
        
      });
  
    console.log("pending count" + this.pendingcount);
    console.log(this.tcrarr)
  
    
  });
  



  this.AccountService.adminloaderuser().subscribe((data)=>{
    this.user=JSON.parse(JSON.stringify(data));
    console.log(this.user);
    this.totaluser=this.user.length;
  
  
  });
    }

    approve(data){
      this.bookingServices.approve(data);
      // window.location.href="/books";
      
      alert("operation done.reload page to see the change");

    }

    reject(data){


      this.bookingServices.reject(data);
      // window.location.href="/books";
      
      alert("operation done.reload page to see the change");

    }

    remove(data){


      this.bookingServices.remove(data);
      // window.location.href="/books";
      
      alert("operation done.reload page to see the change");

    }

    removeuser(data){


      this.AccountService.removeuser(data);
      // window.location.href="/books";
      
      alert("user deleted.reload page to see the change");

    }


    permissionmgr(){
      this.usrpermissionmgt=false;
      this.usermgr=true;
      this.regswitch=true;
      this.tvmrqst=true;
      this.tcrrqst=true;
      this.cltrqst=true;
      
    }

    usrmgr(){
      this.usrpermissionmgt=true;
      this.usermgr=false;
      this.regswitch=true;
      this.tvmrqst=true;
      this.tcrrqst=true;
      this.cltrqst=true;
      

      
    }
    regon(){
      this.regswitch=false;
      this.usrpermissionmgt=true;
      this.usermgr=true;
      this.tvmrqst=true;
      this.tcrrqst=true;
      this.cltrqst=true;
      

    }
    tvmslt(){
      this.regswitch=true;
      this.usrpermissionmgt=true;
      this.usermgr=true;
      this.tvmrqst=false;
      this.tcrrqst=true;
      this.cltrqst=true;

    }
    tcrslt(){
      this.regswitch=true;
      this.usrpermissionmgt=true;
      this.usermgr=true;
      this.tvmrqst=true;
      this.tcrrqst=false;
      this.cltrqst=true;


    }
    cltslt(){
      this.regswitch=true;
      this.usrpermissionmgt=true;
      this.usermgr=true;
      this.tvmrqst=true;
      this.tcrrqst=true;
      this.cltrqst=false;


    }
    
  
  }