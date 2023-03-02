import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LeaveComponent } from './leave/leave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { LeavepopupComponent } from './leavepopup/leavepopup.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';


import { AttedancdanceComponent } from './attedancdance/attedancdance.component';

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},

 {component:SidenavComponent,path:'sidebar',canActivate:[AuthGuard]},
 {component:ProductComponent,path:'store'},
 {component:CartComponent,path:'cart'},
 {component:LeaveComponent,path:'leave',canActivate:[AuthGuard]},
 {component:LeavelistComponent,path:'leaveUser',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customers'},

// =======start employee routing ======
{component:EmployeeComponent,path:'employee'},
{component:EmployeeformComponent,path:'emplist'},
// =======end employee routing ======
{component:AttedancdanceComponent,path:'attend'},

// 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
