import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  roll: string;
  grade: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  template: `
    <div style="max-width:400px;margin:40px auto;font-family:Arial;">
      <h2>Student Record Manager</h2>
      <form (ngSubmit)="addOrUpdate()" #f="ngForm">
        <input [(ngModel)]="student.name" name="name" placeholder="Name" required style="width:100%;margin-bottom:6px;" />
        <input [(ngModel)]="student.roll" name="roll" placeholder="Roll No" required style="width:100%;margin-bottom:6px;" />
        <input [(ngModel)]="student.grade" name="grade" placeholder="Grade" required style="width:100%;margin-bottom:6px;" />
        <button type="submit">{{editIdx === -1 ? 'Add' : 'Update'}}</button>
        <button type="button" (click)="reset()" *ngIf="editIdx !== -1">Cancel</button>
      </form>
      <table border="1" style="width:100%;margin-top:16px;text-align:center;">
        <tr><th>Name</th><th>Roll</th><th>Grade</th><th>Action</th></tr>
        <tr *ngFor="let s of students; let i = index">
          <td>{{s.name}}</td><td>{{s.roll}}</td><td>{{s.grade}}</td>
          <td>
            <button (click)="edit(i)">Edit</button>
            <button (click)="del(i)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  `
})
export class AppComponent {
  students: Student[] = [];
  student: Student = { name: '', roll: '', grade: '' };
  editIdx = -1;
  
  addOrUpdate() {
    if (this.editIdx === -1) this.students.push({ ...this.student });
    else this.students[this.editIdx] = { ...this.student };
    this.reset();
  }
  
  edit(i: number) {
    this.editIdx = i;
    this.student = { ...this.students[i] };
  }
  
  del(i: number) { 
    this.students.splice(i, 1); 
    this.reset(); 
  }
  
  reset() { 
    this.student = { name: '', roll: '', grade: '' }; 
    this.editIdx = -1; 
  }
} 