import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], query: string): any[] {
    if (!query) return items;
    return items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));
  }
} 