import { Component } from '@angular/core';
import { Employee } from '../models/employee.interface';
import { EmployeesService } from './helpers/services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'criptostamp';
  constructor(private emplService: EmployeesService) {}

  employees: Employee[] = this.emplService.getAll();
  filteredEmployyes: Employee[] = this.employees;
  employeeFullName: string = '';

  sortByColumn(
    columnName:
      | 'isActive'
      | 'age'
      | 'balance'
      | 'company'
      | 'email'
      | 'address'
      | 'favoriteFruit'
  ) {
    this.employees = this.employees.sort((a: any, b: any) => {
      return a[columnName] > b[columnName] ? 1 : -1;
    });
  }
}
