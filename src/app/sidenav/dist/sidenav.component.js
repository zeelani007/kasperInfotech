"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var router_1 = require("@angular/router");
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(
    // private loadingBar: SlimLoadingBarService,
    route, breakpointObserver) {
        var _this = this;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.title = 'ng crm';
        this.user = null;
        this.isMobile = false;
        this.mode = "side";
        this.uiContent = "content";
        this.progrssBarClass = "progress-bar";
        this.isloading = true;
        this.isadmin = false;
        this.isMenuVisible = false;
        console.log(" constructor");
        this.isloading = true;
        breakpointObserver.observe([
            layout_1.Breakpoints.HandsetLandscape,
            layout_1.Breakpoints.HandsetPortrait
        ]).subscribe(function (result) {
            console.log(result);
            if (result.matches) {
                // this.activateHandsetLayout();
                _this.isMobile = true;
                _this.mode = "over";
                _this.uiContent = "mobile-content";
            }
            else {
                _this.isMobile = false;
                _this.mode = "side";
                _this.uiContent = "content";
            }
        });
        // this.route.events.subscribe((event: Event) => {
        //   this.navigationInterceptor(event);
        // })
        //   ;
    }
    SidenavComponent.prototype.ngOnChanges = function () {
        console.log(" ngOnChanges");
    };
    SidenavComponent.prototype.ngOnInit = function () {
        console.log(" ngOnInit");
        this.isloading = false;
    };
    SidenavComponent.prototype.logout = function () {
        // localStorage.removeItem('currentUser');
        this.route.navigate(['login']);
    };
    SidenavComponent.prototype.isAuth = function (isAuth) {
        if (isAuth) {
            // this.user = JSON.parse(localStorage.getItem(APP_USER_PROFILE)) || <User>{};
        }
    };
    SidenavComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this.progrssBarClass = "progress-bar";
            this.isloading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.progrssBarClass = "progress-bar-hidden";
            this.isloading = false;
        }
        if (event instanceof router_1.NavigationCancel) {
            this.progrssBarClass = "progress-bar-hidden";
            this.isloading = false;
        }
        if (event instanceof router_1.NavigationError) {
            this.progrssBarClass = "progress-bar-hidden";
            this.isloading = false;
        }
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        this.breakpointObserver.ngOnDestroy();
        //   this.router.events
        // this.breakpoint.
    };
    SidenavComponent.prototype.ngDoCheck = function () {
        var currentroute = this.route.url;
        var role = sessionStorage.getItem('role');
        if (currentroute == '/login' || currentroute == '/register') {
            this.isMenuVisible = false;
        }
        else {
            this.isMenuVisible = true;
        }
        if (role == 'admin') {
            this.isadmin = true;
        }
        else {
            this.isadmin = false;
        }
    };
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            templateUrl: './sidenav.component.html',
            styleUrls: ['./sidenav.component.css']
        })
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;

//# sourceMappingURL=sidenav.component.js.map
