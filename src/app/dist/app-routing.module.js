"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guard/auth.guard");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_component_1 = require("./user/user.component");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var product_component_1 = require("./product/product.component");
var cart_component_1 = require("./cart/cart.component");
var leave_component_1 = require("./leave/leave.component");
var leavelist_component_1 = require("./leavelist/leavelist.component");
var employee_component_1 = require("./employee/employee.component");
var customer_component_1 = require("./customer/customer.component");
var employeeform_component_1 = require("./employeeform/employeeform.component");
var attedancdance_component_1 = require("./attedancdance/attedancdance.component");
var routes = [
    { component: login_component_1.LoginComponent, path: 'login' },
    { component: register_component_1.RegisterComponent, path: 'register' },
    { component: home_component_1.HomeComponent, path: '', canActivate: [auth_guard_1.AuthGuard] },
    { component: user_component_1.UserComponent, path: 'user', canActivate: [auth_guard_1.AuthGuard] },
    { component: sidenav_component_1.SidenavComponent, path: 'sidebar', canActivate: [auth_guard_1.AuthGuard] },
    { component: product_component_1.ProductComponent, path: 'store' },
    { component: cart_component_1.CartComponent, path: 'cart' },
    { component: leave_component_1.LeaveComponent, path: 'leave', canActivate: [auth_guard_1.AuthGuard] },
    { component: leavelist_component_1.LeavelistComponent, path: 'leaveUser', canActivate: [auth_guard_1.AuthGuard] },
    { component: customer_component_1.CustomerComponent, path: 'customers' },
    // =======start employee routing ======
    { component: employee_component_1.EmployeeComponent, path: 'employee' },
    { component: employeeform_component_1.EmployeeformComponent, path: 'emplist' },
    // =======end employee routing ======
    { component: attedancdance_component_1.AttedancdanceComponent, path: 'attend' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
