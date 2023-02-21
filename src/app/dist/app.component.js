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
var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private loadingBar: SlimLoadingBarService,
    route, 
    // public AuthService: AuthService,
    breakpointObserver) {
        var _this = this;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.title = 'ng crm';
        this.user = null;
        // isMobile: boolean;
        this.mode = "side";
        this.uiContent = "content";
        this.progrssBarClass = "progress-bar";
        this.isloading = true;
        this.isadmin = false;
        this.isuser = false;
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
                // this.isMobile = true;
                _this.mode = "over";
                _this.uiContent = "mobile-content";
            }
            else {
                // this.isMobile = false;
                _this.mode = "side";
                _this.uiContent = "content";
            }
        });
        // this.route.events.subscribe((event: Event) => {
        //   this.navigationInterceptor(event);
        // })
        //   ;
    }
    AppComponent.prototype.ngOnChanges = function () {
        console.log(" ngOnChanges");
    };
    // ngOnInit(): void {
    //   console.log(" ngOnInit")
    //   this.user = this.AuthService.getUser();
    //   this.isloading = false;
    // }
    // logout(): void {
    //   // localStorage.removeItem('currentUser');
    //   this.AuthService.logout()
    //   this.route.navigate(['login']);
    // }
    // isAuth(isAuth?: any) {
    //   if (isAuth) {
    //     this.user = this.authService.getUser()
    //     // this.user = JSON.parse(localStorage.getItem(APP_USER_PROFILE)) || <User>{};
    //   }
    // }
    AppComponent.prototype.navigationInterceptor = function (event) {
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
    // ngOnDestroy() {
    //   this.breakpointObserver.ngOnDestroy()
    //   this.authService.logout()
    //   //   this.router.events
    //   // this.breakpoint.
    // }
    AppComponent.prototype.ngDoCheck = function () {
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
