import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Booking1Component } from './component/booking1/booking1.component';
import { Booking2Component } from './component/booking2/booking2.component';
import { FrontpageComponent } from './component/frontpage/frontpage.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { Booking3Component } from './component/booking3/booking3.component';
import { BookingdateComponent } from './component/bookingdate/bookingdate.component';
import { BookingconfirmComponent } from './component/bookingconfirm/bookingconfirm.component';


const routes: Routes = [{path:"user",component:UserComponent},
{path:"admin",component:AdminComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"booking1",component:Booking1Component},
{path:"booking2",component:Booking2Component},
{path:"bookingdate",component:BookingdateComponent},
{path:"booking3",component:Booking3Component},
{path:"",component:FrontpageComponent},
{path:"bookingconfirm",component:BookingconfirmComponent},


{path:"adminlogin",component:AdminloginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
