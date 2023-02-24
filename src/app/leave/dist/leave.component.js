"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(builder, service, router, dialog, toastr) {
        this.builder = builder;
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.displayedColumns = ['username', 'name', 'from', 'to', 'reason', 'role'];
        this.registerform = this.builder.group({
            id: this.builder.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])),
            name: this.builder.control('', forms_1.Validators.required),
            // password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
            email: this.builder.control('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])),
            gender: this.builder.control('male'),
            fromdate: this.builder.control(''),
            todate: this.builder.control(''),
            reason: this.builder.control(''),
            role: this.builder.control(''),
            isactive: this.builder.control(false)
        });
        this.LoadUser();
    }
    LeaveComponent_1 = LeaveComponent;
    LeaveComponent.prototype.ngAfterViewInit = function () {
    };
    LeaveComponent.prototype.LoadUser = function () {
        var _this = this;
        this.service.Getall().subscribe(function (res) {
            _this.userlist = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.userlist);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    LeaveComponent.prototype.updateuser = function (code) {
        this.OpenDialog('1000ms', '600ms', code);
    };
    LeaveComponent.prototype.OpenDialog = function (enteranimation, exitanimation, code) {
        var _this = this;
        var popup = this.dialog.open(LeaveComponent_1, {
            enterAnimationDuration: enteranimation,
            exitAnimationDuration: exitanimation,
            width: '30%',
            data: {
                usercode: code
            }
        });
        popup.afterClosed().subscribe(function (res) {
            _this.LoadUser();
        });
    };
    LeaveComponent.prototype.proceedregister = function () {
        var _this = this;
        if (this.registerform.valid) {
            this.service.RegisterUser(this.registerform.value).subscribe(function (result) {
                _this.toastr.success('Please Wait For Approval.', 'Request successfully');
                // this.router.navigate(['login'])
            });
        }
        else {
            this.toastr.warning('Please enter valid data.');
        }
    };
    var LeaveComponent_1;
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], LeaveComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], LeaveComponent.prototype, "sort");
    LeaveComponent = LeaveComponent_1 = __decorate([
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
