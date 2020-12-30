import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { logger } from 'src/app/model/account.model';


import {LocalStorageService} from "angular-web-storage" 


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private AccountService:AccountService) { } 
  logger=new logger(null,null);
    ngOnInit() {
     
      
    }
  adninlogger()
  {
    this.AccountService.adminlogger(this.logger);
     if(this.logger.username=="admin" && this.logger.password=="admin"){
    window.location.href="/admin";
    console.log(this.logger)
    alert("Success");
     }
     else{
       alert("master admin username or password wrong");
     }
  }
  }