"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("src/material.module");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var updatepopup_component_1 = require("./updatepopup/updatepopup.component");
var customer_component_1 = require("./customer/customer.component");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var progress_bar_1 = require("@angular/material/progress-bar");
var sidenav_component_1 = require("./sidenav/sidenav.component");
// import { DashboardComponent } from './dashboard/dashboard.component';
var ng2_charts_1 = require("ng2-charts");
var product_component_1 = require("./product/product.component");
var cart_component_1 = require("./cart/cart.component");
var filter_pipe_1 = require("./shared/filter.pipe");
var header_component_1 = require("./header/header.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                updatepopup_component_1.UpdatepopupComponent,
                customer_component_1.CustomerComponent,
                sidenav_component_1.SidenavComponent,
                product_component_1.ProductComponent,
                cart_component_1.CartComponent,
                filter_pipe_1.FilterPipe
                // DashboardComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                material_module_1.MaterialModule,
                http_1.HttpClientModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                progress_bar_1.MatProgressBarModule,
                ng2_charts_1.NgChartsModule,
                forms_1.FormsModule,
                ngx_toastr_1.ToastrModule.forRoot()
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
