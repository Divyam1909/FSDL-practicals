import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="max-width:320px;margin:40px auto;font-family:Arial;text-align:center;">
      <h2>Hello Angular</h2>
      <input [(ngModel)]="msg" placeholder="Type something" style="width:100%;margin-bottom:8px;" />
      <div style="margin-top:12px;">You typed: <b>{{msg}}</b></div>
    </div>
  `
})
export class AppComponent {
  msg = '';
} 