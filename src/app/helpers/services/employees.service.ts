import { Injectable } from '@angular/core';
import { fakeData } from '../../fakeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getAll(){
    return fakeData
  }
}
