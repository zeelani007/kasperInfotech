"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(builder, toastr, service, router) {
        this.builder = builder;
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.loginform = this.builder.group({
            id: this.builder.control('', forms_1.Validators.required),
            password: this.builder.control('', forms_1.Validators.required)
        });
        sessionStorage.clear();
    }
    LoginComponent.prototype.proceedlogin = function () {
        var _this = this;
        if (this.loginform.valid) {
            this.service.GetUserbyCode(this.loginform.value.id).subscribe(function (item) {
                _this.result = item;
                if (_this.result.password === _this.loginform.value.password) {
                    if (_this.result.isactive) {
                        sessionStorage.setItem('username', _this.result.id);
                        sessionStorage.setItem('role', _this.result.role);
                        _this.router.navigate(['']);
                    }
                    else {
                        _this.toastr.error('Please contact Admin', 'InActive User');
                    }
                }
                else {
                    _this.toastr.error('Invalid credentials');
                }
            });
        }
        else {
            this.toastr.warning('Please enter valid data.');
        }
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
