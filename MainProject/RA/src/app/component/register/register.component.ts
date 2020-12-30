import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';       //booking service import
import { register } from 'src/app/model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AccountService:AccountService) { }
  register=new register(null,null,null,null);
    ngOnInit() {
    }
  reg()
  {
    this.AccountService.register(this.register).subscribe(data=>{console.log(data);
      if(data==null){alert("username taken, try gain");
      window.location.href="/register"
    }
    else if(data!=null){
      alert("sucess");
      window.location.href="/admin";
    }
  });
    
    // window.location.href="/books";
    console.log(this.register);
    // window.location.href="/admin";
    // alert("Success");
    
  }
  }