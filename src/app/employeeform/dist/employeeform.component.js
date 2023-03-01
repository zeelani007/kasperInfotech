"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EmployeeformComponent = /** @class */ (function () {
    function EmployeeformComponent() {
        this.onRemoveEmployee = new core_1.EventEmitter();
        this.onEditEmployee = new core_1.EventEmitter();
        this.employee = {
            firstname: '',
            lastname: '',
            birthdate: '',
            gender: '',
            education: '',
            company: '',
            jobExperience: 0,
            salary: 0,
            profile: ''
        };
    }
    EmployeeformComponent.prototype.ngOnInit = function () {
        console.log(this.employee);
    };
    EmployeeformComponent.prototype.deleteEmployeeClicked = function () {
        this.onRemoveEmployee.emit(this.employee.id);
    };
    EmployeeformComponent.prototype.editEmployeeClicked = function () {
        this.onEditEmployee.emit(this.employee.id);
    };
    __decorate([
        core_1.Input()
    ], EmployeeformComponent.prototype, "employee");
    __decorate([
        core_1.Output()
    ], EmployeeformComponent.prototype, "onRemoveEmployee");
    __decorate([
        core_1.Output()
    ], EmployeeformComponent.prototype, "onEditEmployee");
    EmployeeformComponent = __decorate([
        core_1.Component({
            selector: 'app-employeeform',
            templateUrl: './employeeform.component.html',
            styleUrls: ['./employeeform.component.css']
        })
    ], EmployeeformComponent);
    return EmployeeformComponent;
}());
exports.EmployeeformComponent = EmployeeformComponent;

//# sourceMappingURL=employeeform.component.js.map
