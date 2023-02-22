"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
        this.has_error = false;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this._router.navigate(['/']);
        }
    };
    LoginComponent.prototype.userLogin = function (form) {
        var _this = this;
        // console.log("form", form.value);
        this._auth.loginUser(form.value)
            .subscribe(function (res) {
            // console.log("Token reterive successful", res)
            _this.has_error = false;
            _this.login_user_msg = 'Login in, Please wait... !!!';
            localStorage.setItem('token', res.access_token);
            localStorage.setItem('refreshToken', res.refresh_token);
            _this._router.navigate(['/home']);
        }, function (error) {
            // console.log("user login error", error.error);
            _this.has_error = true;
            _this.login_user_msg = 'Invalid Username and Password !!!';
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
