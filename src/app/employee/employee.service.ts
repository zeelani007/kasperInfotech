import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/profile';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
