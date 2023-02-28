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
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.haveedit = false;
        this.haveadd = false;
        this.havedelete = false;
        this.displayedColumns = ['id',
            'customerName',
            'mobile',
            'email',
            'adress',
            'type',
            'status',
            'action',];
        this.SetAccesspermission();
    }
    CustomerComponent.prototype.ngAfterViewInit = function () {
    };
    CustomerComponent.prototype.LoadCustomer = function () {
        var _this = this;
        this.service.GetAllCustomer().subscribe(function (res) {
            _this.customerlist = res;
            _this.dataSource = new table_1.MatTableDataSource(_this.customerlist);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    CustomerComponent.prototype.SetAccesspermission = function () {
        var _this = this;
        this.service.Getaccessbyrole(this.service.getrole(), 'customer').subscribe(function (res) {
            _this.accessdata = res;
            //console.log(this.accessdata);
            if (_this.accessdata.length > 0) {
                _this.haveadd = _this.accessdata[0].haveadd;
                _this.haveedit = _this.accessdata[0].haveedit;
                _this.havedelete = _this.accessdata[0].havedelete;
                _this.LoadCustomer();
            }
            else {
                alert('you are not authorized to access.');
                _this.router.navigate(['']);
            }
        });
    };
    CustomerComponent.prototype.updatecustomer = function (code) {
        if (this.haveedit) {
            this.toastr.success('Success');
        }
        else {
            this.toastr.warning("You don't have access for Edit");
        }
    };
    CustomerComponent.prototype.removecustomer = function (code) {
        if (this.havedelete) {
            this.toastr.success('Success');
        }
        else {
            this.toastr.warning("You don't have access for Delete");
        }
    };
    CustomerComponent.prototype.addcustomer = function () {
        if (this.haveadd) {
            this.toastr.success('Success');
        }
        else {
            this.toastr.warning("You don't have access for Create");
        }
    };
    // ngOnInit(): void {
    //   this.getEmployeeList();
    // }
    // openAddEditEmpForm() {
    //   const dialogRef = this._dialog.open(CustomerformComponent);
    //   dialogRef.afterClosed().subscribe({
    //     next: (val) => {
    //       if (val) {
    //         this.getEmployeeList();
    //       }
    //     },
    //   });
    // }
    // getEmployeeList() {
    //   this._empService.getEmployeeList().subscribe({
    //     next: (res) => {
    //       this.dataSource = new MatTableDataSource(res);
    //       this.dataSource.sort = this.sort;
    //       this.dataSource.paginator = this.paginator;
    //     },
    //     error: console.log,
    //   });
    // }
    CustomerComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], CustomerComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], CustomerComponent.prototype, "sort");
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-customer',
            templateUrl: './customer.component.html',
            styleUrls: ['./customer.component.css']
        })
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;

//# sourceMappingURL=customer.component.js.map
