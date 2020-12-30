import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';    //http 

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  userlogger(item){                   //user logger

    
    console.log("service called for logger");
    
    return this.http.put("http://localhost:3500/signin/userlogger",{"userlogger":item});
  }
// ............for load data to admin dash ɵBrowserDomAdapter(user data)..................


  adminloaderuser(){
    
    return this.http.get("http://localhost:3500/adminuserdataloader");
  }

  register(item){                   //admin logger

    
    
    return this.http.put("http://localhost:3500/adduser",{"register":item});
  }

  
  adminlogger(item){                   //admin logger

    
    
    return this.http.post("http://localhost:3500/insert",{"userlogger":item}).subscribe(data=>{console.log(data)});
  }


  removeuser(data){

    console.log(data);
    console.log("...........................deleting user......................")
    return this.http.put("http://localhost:3500/removeuser",{"user":data}).subscribe(data=>{console.log(data)});


  }
}



