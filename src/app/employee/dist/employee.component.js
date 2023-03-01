"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(fb, employeeService) {
        this.fb = fb;
        this.employeeService = employeeService;
        this.educationOptions = [
            '10th pass',
            'diploma',
            'graduate',
            'post graduate',
            'PhD',
        ];
        this.employeeForm = fb.group({});
        this.employees = [];
        this.employeesToDisplay = this.employees;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeForm = this.fb.group({
            firstname: this.fb.control(''),
            lastname: this.fb.control(''),
            birthday: this.fb.control(''),
            gender: this.fb.control(''),
            education: this.fb.control('default'),
            company: this.fb.control(''),
            jobExperience: this.fb.control(''),
            salary: this.fb.control('')
        });
        this.employeeService.getEmployees().subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var emp = res_1[_i];
                _this.employees.unshift(emp);
            }
            _this.employeesToDisplay = _this.employees;
        });
    };
    EmployeeComponent.prototype.ngAfterViewInit = function () {
        //this.buttontemp.nativeElement.click();
    };
    EmployeeComponent.prototype.addEmployee = function () {
        var _this = this;
        var _a;
        var employee = {
            firstname: this.FirstName.value,
            lastname: this.LastName.value,
            birthdate: this.BirthDay.value,
            gender: this.Gender.value,
            education: this.educationOptions[parseInt(this.Education.value)],
            company: this.Company.value,
            jobExperience: this.JobExperience.value,
            salary: this.Salary.value,
            profile: (_a = this.fileInput.nativeElement.files[0]) === null || _a === void 0 ? void 0 : _a.name
        };
        this.employeeService.postEmployee(employee).subscribe(function (res) {
            _this.employees.unshift(res);
            _this.clearForm();
        });
    };
    EmployeeComponent.prototype.removeEmployee = function (event) {
        var _this = this;
        this.employees.forEach(function (val, index) {
            if (val.id === parseInt(event)) {
                _this.employeeService.deleteEmployee(event).subscribe(function (res) {
                    _this.employees.splice(index, 1);
                });
            }
        });
    };
    EmployeeComponent.prototype.editEmployee = function (event) {
        var _this = this;
        this.employees.forEach(function (val, ind) {
            if (val.id === event) {
                _this.setForm(val);
            }
        });
        this.removeEmployee(event);
        this.addEmployeeButton.nativeElement.click();
    };
    EmployeeComponent.prototype.setForm = function (emp) {
        this.FirstName.setValue(emp.firstname);
        this.LastName.setValue(emp.lastname);
        this.BirthDay.setValue(emp.birthdate);
        this.Gender.setValue(emp.gender);
        var educationIndex = 0;
        this.educationOptions.forEach(function (val, index) {
            if (val === emp.education)
                educationIndex = index;
        });
        this.Education.setValue(educationIndex);
        this.Company.setValue(emp.company);
        this.JobExperience.setValue(emp.jobExperience);
        this.Salary.setValue(emp.salary);
        this.fileInput.nativeElement.value = '';
    };
    EmployeeComponent.prototype.searchEmployees = function (event) {
        var filteredEmployees = [];
        if (event === '') {
            this.employeesToDisplay = this.employees;
        }
        else {
            filteredEmployees = this.employees.filter(function (val, index) {
                var targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
                var searchKey = event.toLowerCase();
                return targetKey.includes(searchKey);
            });
            this.employeesToDisplay = filteredEmployees;
        }
    };
    EmployeeComponent.prototype.clearForm = function () {
        this.FirstName.setValue('');
        this.LastName.setValue('');
        this.BirthDay.setValue('');
        this.Gender.setValue('');
        this.Education.setValue('');
        this.Company.setValue('');
        this.JobExperience.setValue('');
        this.Salary.setValue('');
        this.fileInput.nativeElement.value = '';
    };
    Object.defineProperty(EmployeeComponent.prototype, "FirstName", {
        get: function () {
            return this.employeeForm.get('firstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "LastName", {
        get: function () {
            return this.employeeForm.get('lastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "BirthDay", {
        get: function () {
            return this.employeeForm.get('birthday');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "Gender", {
        get: function () {
            return this.employeeForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "Education", {
        get: function () {
            return this.employeeForm.get('education');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "Company", {
        get: function () {
            return this.employeeForm.get('company');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "JobExperience", {
        get: function () {
            return this.employeeForm.get('jobExperience');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "Salary", {
        get: function () {
            return this.employeeForm.get('salary');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('fileInput')
    ], EmployeeComponent.prototype, "fileInput");
    __decorate([
        core_1.ViewChild('addEmployeeButton')
    ], EmployeeComponent.prototype, "addEmployeeButton");
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
