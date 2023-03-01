
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee.model';


@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor() {
    this.employee = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };
  }

  ngOnInit(): void {
    console.log(this.employee);
  }

  deleteEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
  }
}
