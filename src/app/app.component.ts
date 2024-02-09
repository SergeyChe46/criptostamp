import { KeyValue } from '@angular/common';
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
  onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  rows: any;
  col: any;
  total: any = [];

  getData(column: string | number) {
    this.total = [];
    var col: keyof Employee = column as keyof Employee;
    for (let i = 0; i < this.employees.length; i++) {
      this.total.push(this.employees[i][col]);
    }
    this.col = col;
  }

  employees: Employee[];
  employeeFullName: string = '';
  sortByAscending: boolean = true;

  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  columns = {
    isActive: 'Is Active',
    firstName: 'First Name',
    secondName: 'Second Name',
    age: 'Age',
    balance: 'Balance',
    company: 'Company',
    email: 'Email',
    address: 'Address',
    tags: 'Tags',
    favoriteFruit: 'Favorite fruit',
  };

  fetchEmployyes() {
    return this.emplService.getAll();
  }

  sortByColumn(columnName: string) {
    this.employees = this.employees.sort((a: any, b: any) => {
      return a[columnName] > b[columnName] ? 1 : -1;
    });
    this.sortByAscending = !this.sortByAscending;
    return this.sortByAscending ? this.employees : this.employees.reverse();
  }

  hideColumn(column: number) {
    console.log(column);
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
