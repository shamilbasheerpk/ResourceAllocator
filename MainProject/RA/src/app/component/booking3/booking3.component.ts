import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-web-storage" ;

@Component({
  selector: 'app-booking3',
  templateUrl: './booking3.component.html',
  styleUrls: ['./booking3.component.css']
})
export class Booking3Component implements OnInit {
  key="city";
  key1="lab";
  objname=(this.local.get(this.key))
  display=[];

  CLT=["CLT",{"name":"LAB","img":"https://usher.moody.utexas.edu/common/assets/facilities/photos/cmb4114_3271_2015_main.jpg"},
   
    {"name":"CLASSROOM","img":"https://wallpaperplay.com/walls/full/d/b/e/163507.jpg"},
    {"name":"MINILAB","img":"https://scx2.b-cdn.net/gfx/news/2019/1-crowdsourced.jpg"}


  ];

  TVM=["TVM",{"name":"LAB","img":"https://usher.moody.utexas.edu/common/assets/facilities/photos/cmb4114_3271_2015_main.jpg"},
  {"name":"CONFERENCE HALL","img":"https://www.hotelkohinoorcontinental.com/img/board.jpg"},
    {"name":"CLASSROOM","img":"https://wallpaperplay.com/walls/full/d/b/e/163507.jpg"},
   
    {"name":"STUDIO","img":"https://wallpaperaccess.com/full/635732.jpg"},


  ];

  TCR=["TCR",{"name":"LAB","img":"https://usher.moody.utexas.edu/common/assets/facilities/photos/cmb4114_3271_2015_main.jpg"}
    

  ];




  
  constructor(public local:LocalStorageService) { }

  ngOnInit():void {             //display

    if(this.CLT[0]==this.objname){
         this.CLT.forEach(element => {
           
           this.display.push(element);
           
         });
    }
    else if(this.TVM[0]==this.objname){
      this.TVM.forEach(element => {
        this.display.push(element);
        
      });
    }
    else if(this.TCR[0]==this.objname){
      this.TCR.forEach(element => {
        this.display.push(element);
        
      });
    }

    this.display.shift();
    
      
    
    
        
  }
  labchooser(name){
    this.local.set(this.key1,name);
    window.location.href="bookingdate";
    
    
    

  }

    
}
