import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../../models/employee.interface';

@Pipe({
  name: 'filterUser',
})
export class FilterUserPipe implements PipeTransform {
  transform(items: Employee[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return `${it.name?.first} ${it.name?.last}`
        .toLocaleLowerCase()
        .includes(searchText);
    });
  }
}
