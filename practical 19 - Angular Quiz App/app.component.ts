import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="max-width:400px;margin:40px auto;font-family:Arial;">
      <h2>Quiz App</h2>
      <div *ngIf="idx < questions.length">
        <div style="font-weight:bold;">{{questions[idx].q}}</div>
        <div *ngFor="let o of questions[idx].o; let i = index">
          <label><input type="radio" name="opt" [value]="i" [(ngModel)]="selected"> {{o}}</label>
        </div>
        <button (click)="next()">Next</button>
      </div>
      <div *ngIf="idx >= questions.length">
        <div>Quiz Complete!</div>
        <div>Your score: {{score}} / {{questions.length}}</div>
      </div>
    </div>
  `
})
export class AppComponent {
  questions = [
    { q: 'Capital of India?', o: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'], a: 0 },
    { q: '5 + 3 = ?', o: ['6', '7', '8', '9'], a: 2 },
    { q: 'Largest ocean?', o: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], a: 2 },
    { q: 'Sun rises in?', o: ['West', 'East', 'North', 'South'], a: 1 },
    { q: '2 * 6 = ?', o: ['8', '10', '12', '14'], a: 2 }
  ];
  idx = 0;
  score = 0;
  selected: number | null = null;
  next() {
    if (this.selected == null) return alert('Select an option!');
    if (this.selected === this.questions[this.idx].a) this.score++;
    this.idx++;
    this.selected = null;
  }
} 