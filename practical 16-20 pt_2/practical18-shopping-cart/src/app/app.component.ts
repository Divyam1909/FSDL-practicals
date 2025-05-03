import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, FormsModule],
  template: `
    <div style="max-width:400px;margin:40px auto;font-family:Arial;">
      <h2>Shopping Cart</h2>
      <div *ngFor="let item of items; let i = index" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span>{{item.name}} (₹{{item.price}})</span>
        <button (click)="add(i)">Add</button>
        <button (click)="remove(i)" [disabled]="cart[i]===0">Remove</button>
        <span>Qty: {{cart[i]}}</span>
      </div>
      <hr>
      <div>Total: ₹{{total()}}</div>
    </div>
  `
})
export class AppComponent {
  items = [
    { name: 'Apple', price: 30 },
    { name: 'Banana', price: 10 },
    { name: 'Orange', price: 20 }
  ];
  cart = [0, 0, 0];
  add(i: number) { this.cart[i]++; }
  remove(i: number) { if (this.cart[i] > 0) this.cart[i]--; }
  total() { return this.cart.reduce((sum, qty, i) => sum + qty * this.items[i].price, 0); }
} 