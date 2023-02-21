import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:RegisterComponent,path:'register'},
 {component:HomeComponent,path:'',canActivate:[AuthGuard]},
 {component:UserComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {component:SidenavComponent,path:'sidebar',canActivate:[AuthGuard]},
 {component:ProductComponent,path:'customer',canActivate:[AuthGuard]},
 {component:ProductComponent,path:'product'},
 {component:CartComponent,path:'cart'},

//  {path:'products', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
