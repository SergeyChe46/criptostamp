import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fakeData } from '../../fakeData';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return fakeData;
  }
}
