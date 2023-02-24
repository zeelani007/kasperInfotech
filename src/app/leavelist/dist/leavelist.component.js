"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var leavepopup_component_1 = require("../leavepopup/leavepopup.component");
var LeavelistComponent = /** @class */ (function () {
    function LeavelistComponent(builder, service, dialog) {
        this.builder = builder;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['username', 'name', 'from', 'to', 'reason', 'role', 'action'];
        this.LoadUser();
    }
    LeavelistComponent.prototype.ngAfterViewInit = function () {
    };
    LeavelistComponent.prototype.LoadUser = function () {
        var _this = this;
        this.service.Getall().subscribe(function (res) {
            _this.userlist = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.userlist);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    LeavelistComponent.prototype.updateuser = function (code) {
        this.OpenDialog('1000ms', '600ms', code);
    };
    LeavelistComponent.prototype.OpenDialog = function (enteranimation, exitanimation, code) {
        var _this = this;
        var popup = this.dialog.open(leavepopup_component_1.LeavepopupComponent, {
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
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], LeavelistComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], LeavelistComponent.prototype, "sort");
    LeavelistComponent = __decorate([
        core_1.Component({
            selector: 'app-leavelist',
            templateUrl: './leavelist.component.html',
            styleUrls: ['./leavelist.component.css']
        })
    ], LeavelistComponent);
    return LeavelistComponent;
}());
exports.LeavelistComponent = LeavelistComponent;

//# sourceMappingURL=leavelist.component.js.map
