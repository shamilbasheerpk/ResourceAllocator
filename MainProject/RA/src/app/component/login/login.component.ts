import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
// import { DatamoverService } from 'src/app/services/datamover.service';
import { logger } from 'src/app/model/account.model';
import {LocalStorageService} from "angular-web-storage" 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AccountService:AccountService,public local:LocalStorageService) { }
  loggerdata;
  
  key="value"; //topass to user dash board
  logger=new logger(null,null);
    ngOnInit() {
      
    }
  userlogger()
  {
    console.log("userlogger called");
    this.AccountService.userlogger(this.logger).subscribe((data)=>{
      this.loggerdata=JSON.parse(JSON.stringify(data));
      
      if(this.loggerdata!=null){
        this.local.set(this.key,this.loggerdata.name);
        
        
      console.log(this.loggerdata);
      window.location.href="/user";
      }
      else if(this.loggerdata == null){
        alert("incorrect password or username");
        window.location.href="/login";
      }
      
     
      // this.DatamoverService.currentMessage.subscribe(message => this.message = message)  //datasend to userdashboard
      // this.DatamoverService.changer(this.message);  //datasend to userdashboard

    });
  
  
  
      
      
    
    

  }

  
  }


  