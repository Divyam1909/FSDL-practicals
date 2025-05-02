# Practical 16 - Angular Hello World with Data Binding

This project is a simple Angular app demonstrating two-way data binding.

## Structure
- **app.component.ts**: Contains all the code (Angular component).

## Features
- **Input Field**: User types a message.
- **Live Display**: The message is shown below as you type (two-way binding).

## Code Highlights
- Uses Angular's `[(ngModel)]` for two-way data binding.
- Inline template and styles for simplicity.
- All logic and UI in a single component.

## How to Run
1. Place `app.component.ts` in an Angular project (e.g., generated with `ng new`).
2. Ensure `FormsModule` is imported in your `app.module.ts`.
3. Run `ng serve` in the project directory.

---

**Example Components:**
- `<input [(ngModel)]="msg">` for two-way binding.
- `{{msg}}` for live display. 