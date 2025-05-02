import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="max-width:400px;margin:40px auto;font-family:Arial;">
      <h2>Movie Search</h2>
      <input [(ngModel)]="query" placeholder="Search by title" style="width:100%;margin-bottom:8px;" />
      <ul>
        <li *ngFor="let m of movies | filter:query">{{m.title}} ({{m.year}})</li>
      </ul>
    </div>
  `
})
export class AppComponent {
  query = '';
  movies = [
    { title: 'Inception', year: 2010 },
    { title: 'Interstellar', year: 2014 },
    { title: 'The Matrix', year: 1999 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Dangal', year: 2016 }
  ];
}

// Add this filter pipe in your app.module.ts for filtering functionality:
// @Pipe({name: 'filter'})
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], query: string): any[] {
//     if (!query) return items;
//     return items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));
//   }
// } 