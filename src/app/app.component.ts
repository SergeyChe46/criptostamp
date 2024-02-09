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
  constructor(private emplService: EmployeesService) {
    this.employees = this.fetchEmployyes();
  }

  employees: Employee[];
  employeeFullName: string = '';
  sortByAscending: boolean = true;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  fetchEmployyes() {
    return this.emplService.getAll();
  }
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
    this.sortByAscending = !this.sortByAscending;
    return this.sortByAscending ? this.employees : this.employees.reverse();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.employees = this.fetchEmployyes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.employees = this.fetchEmployyes();
  }
}
