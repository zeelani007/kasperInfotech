"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
// import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
var employeeform_component_1 = require("../employeeform/employeeform.component");
var core_2 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_dialog, _empService, _coreService) {
        this._dialog = _dialog;
        this._empService = _empService;
        this._coreService = _coreService;
        this.displayedColumns = [
            'id',
            'firstName',
            'lastName',
            'email',
            'dob',
            'gender',
            'Profile',
            'company',
            'experience',
            // 'package',
            'action',
        ];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    };
    EmployeeComponent.prototype.openAddEditEmpForm = function () {
        var _this = this;
        var dialogRef = this._dialog.open(employeeform_component_1.EmployeeformComponent);
        dialogRef.afterClosed().subscribe({
            next: function (val) {
                if (val) {
                    _this.getEmployeeList();
                }
            }
        });
    };
    EmployeeComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this._empService.getEmployeeList().subscribe({
            next: function (res) {
                _this.dataSource = new table_1.MatTableDataSource(res);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            },
            error: console.log
        });
    };
    EmployeeComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EmployeeComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this._empService.deleteEmployee(id).subscribe({
            next: function (res) {
                _this._coreService.openSnackBar('Employee deleted!', 'done');
                _this.getEmployeeList();
            },
            error: console.log
        });
    };
    EmployeeComponent.prototype.openEditForm = function (data) {
        var _this = this;
        var dialogRef = this._dialog.open(employeeform_component_1.EmployeeformComponent, {
            data: data
        });
        dialogRef.afterClosed().subscribe({
            next: function (val) {
                if (val) {
                    _this.getEmployeeList();
                }
            }
        });
    };
    __decorate([
        core_2.ViewChild(paginator_1.MatPaginator)
    ], EmployeeComponent.prototype, "paginator");
    __decorate([
        core_2.ViewChild(sort_1.MatSort)
    ], EmployeeComponent.prototype, "sort");
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css']
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;

//# sourceMappingURL=employee.component.js.map
