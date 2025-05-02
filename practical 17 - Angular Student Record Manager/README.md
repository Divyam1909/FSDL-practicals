# Practical 17 - Angular Student Record Manager

This project is a simple Angular app to add, edit, and delete student records.

## Structure
- **app.component.ts**: Contains all the code (Angular component).

## Features
- **Add Student**: Enter name, roll no, and grade.
- **Edit Student**: Click 'Edit', update fields, and save.
- **Delete Student**: Remove a student from the table.
- **Table Display**: Shows all student records.

## Code Highlights
- Uses Angular's `[(ngModel)]` for two-way data binding.
- All logic and UI in a single component.
- Inline template and styles for simplicity.

## How to Run
1. Place `app.component.ts` in an Angular project (e.g., generated with `ng new`).
2. Ensure `FormsModule` is imported in your `app.module.ts`.
3. Run `ng serve` in the project directory.

---

**Example Components:**
- `<form>` for adding/editing students.
- `<table>` for displaying records.
- Angular event bindings for actions. 