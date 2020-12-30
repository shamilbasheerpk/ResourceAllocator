import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// ......................service....................
import { BookingService } from 'src/app/services/booking.service';       //booking service import
import { AccountService } from 'src/app/services/account.service';
import { DatamoverService } from 'src/app/services/datamover.service';        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { LoginComponent } from './component/login/login.component';
import { Booking1Component } from './component/booking1/booking1.component';
import { Booking2Component } from './component/booking2/booking2.component';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { RegisterComponent } from './component/register/register.component';
import { Booking3Component } from './component/booking3/booking3.component';
import { BookingdateComponent } from './component/bookingdate/bookingdate.component';
import { BookingconfirmComponent } from './component/bookingconfirm/bookingconfirm.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    Booking1Component,
    Booking2Component,
    UserComponent,
    AdminComponent,
    AdminloginComponent,
    RegisterComponent,
    Booking3Component,
    BookingdateComponent,
    BookingconfirmComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BookingService,AccountService,DatamoverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
