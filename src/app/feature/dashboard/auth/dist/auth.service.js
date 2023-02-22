"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var constant_1 = require("./../constant/constant");
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._loginUrl = constant_1.Constant.API_ENDPOINT + '/oauth/token';
        this._client_id = 'demo-client';
        this._client_secret = 'demo-secret';
        this.tokenHeader = {
            'Authorization': 'Basic ' + btoa(this._client_id + ':' + this._client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    // convert to form data
    AuthService.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        // tslint:disable-next-line:forin
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    AuthService.prototype.errorHandler = function (error) {
        console.log('Auth Service api error ', error);
        return rxjs_1.throwError(error);
    };
    AuthService.prototype.loginUser = function (user) {
        localStorage.removeItem('token');
        localStorage.removeItem('access_token');
        var data = {
            'username': user.username,
            'password': user.password,
            'grant_type': 'password'
        };
        return this.http.post(this._loginUrl, this.getFormUrlEncoded(data), { headers: this.tokenHeader });
    };
    AuthService.prototype.refreshToken = function (request, next) {
        var _this = this;
        if (localStorage.getItem('refreshToken') != null) {
            this.callRefreshToken()
                .subscribe(function (res) {
                // console.log('Token retrieve successful', res);
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('refreshToken', res.refresh_token);
                next.handle(request);
                location.reload();
            }, function (err) {
                // console.log('refresh token also results into error ', err);
                _this.logout();
            });
        }
        else {
            // console.log("Cant use Refresh token");
            this._router.navigate(['/']);
        }
    };
    AuthService.prototype.callRefreshToken = function () {
        localStorage.removeItem('token');
        // console.log("refresh token called ", localStorage.getItem("refreshToken"));
        var data = {
            'grant_type': 'refresh_token',
            'client_id': this._client_id,
            'client_secret': this._client_secret,
            'refresh_token': localStorage.getItem('refreshToken')
        };
        return this.http.post(this._loginUrl, this.getFormUrlEncoded(data), { headers: this.tokenHeader })
            .pipe(operators_1.catchError(this.errorHandler));
    };
    AuthService.prototype.isLoggedIn = function () {
        // console.log("is Logged In ", !!localStorage.getItem("token"));
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.isAdmin = function () {
        return localStorage.getItem('role') === 'ROLE_ADMIN';
    };
    AuthService.prototype.logout = function () {
        // console.log("Logged Out called");
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.clear();
        this._router.navigate(['/']);
        // location.reload();
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map
