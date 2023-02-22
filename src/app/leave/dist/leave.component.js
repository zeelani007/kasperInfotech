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
var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(builder, service, router, toastr) {
        this.builder = builder;
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.registerform = this.builder.group({
            id: this.builder.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])),
            name: this.builder.control('', forms_1.Validators.required),
            password: this.builder.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
            email: this.builder.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])),
            gender: this.builder.control('male'),
            fromdate: this.builder.control(''),
            todate: this.builder.control(''),
            reason: this.builder.control(''),
            role: this.builder.control(''),
            isactive: this.builder.control(false)
        });
    }
    LeaveComponent.prototype.proceedregister = function () {
        var _this = this;
        if (this.registerform.valid) {
            this.service.RegisterUser(this.registerform.value).subscribe(function (result) {
                _this.toastr.success('Please contact admin for enable access.', 'Registered successfully');
                // this.router.navigate(['login'])
            });
        }
        else {
            this.toastr.warning('Please enter valid data.');
        }
    };
    LeaveComponent = __decorate([
        core_1.Component({
            selector: 'app-leave',
            templateUrl: './leave.component.html',
            styleUrls: ['./leave.component.css']
        })
    ], LeaveComponent);
    return LeaveComponent;
}());
exports.LeaveComponent = LeaveComponent;

//# sourceMappingURL=leave.component.js.map
