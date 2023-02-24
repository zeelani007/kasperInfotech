"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var LeavepopupComponent = /** @class */ (function () {
    function LeavepopupComponent(builder, service, toastr, dialogref, data) {
        var _this = this;
        this.builder = builder;
        this.service = service;
        this.toastr = toastr;
        this.dialogref = dialogref;
        this.data = data;
        this.registerform = this.builder.group({
            id: this.builder.control(''),
            name: this.builder.control(''),
            fromdate: this.builder.control(''),
            todate: this.builder.control(''),
            email: this.builder.control(''),
            reason: this.builder.control(''),
            role: this.builder.control('', forms_1.Validators.required)
        });
        this.service.getuserrole().subscribe(function (res) {
            _this.rolelist = res;
        });
    }
    LeavepopupComponent.prototype.ngOnInit = function () {
        if (this.data.usercode != '' && this.data.usercode != null) {
            this.loaduserdata(this.data.usercode);
        }
    };
    LeavepopupComponent.prototype.loaduserdata = function (code) {
        var _this = this;
        this.service.GetUserbyCode(code).subscribe(function (res) {
            _this.editdata = res;
            console.log(_this.editdata);
            _this.registerform.setValue({
                id: _this.editdata.id,
                name: _this.editdata.name,
                fromdate: _this.editdata.fromdate,
                email: _this.editdata.email,
                reason: _this.editdata.reason,
                role: _this.editdata.role,
                todate: _this.editdata.todate
            });
        });
    };
    LeavepopupComponent.prototype.UpdateUser = function () {
        var _this = this;
        this.service.updateuser(this.registerform.value.id, this.registerform.value).subscribe(function (res) {
            _this.toastr.success('Updated successfully.');
            _this.dialogref.close();
        });
    };
    LeavepopupComponent = __decorate([
        core_1.Component({
            selector: 'app-leavepopup',
            templateUrl: './leavepopup.component.html',
            styleUrls: ['./leavepopup.component.css']
        }),
        __param(4, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], LeavepopupComponent);
    return LeavepopupComponent;
}());
exports.LeavepopupComponent = LeavepopupComponent;

//# sourceMappingURL=leavepopup.component.js.map
