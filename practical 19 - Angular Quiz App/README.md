# Practical 19 - Angular Quiz App

This project is a simple Angular quiz app with navigation and results.

## Structure
- **app.component.ts**: Contains all the code (Angular component).

## Features
- **5 Questions**: Multiple choice, one at a time.
- **Next Button**: Navigate to next question.
- **Score Display**: Shows final score at the end.

## Code Highlights
- Uses Angular's `[(ngModel)]` for answer selection.
- All logic and UI in a single component.
- Inline template and styles for simplicity.

## How to Run
1. Place `app.component.ts` in an Angular project (e.g., generated with `ng new`).
2. Ensure `FormsModule` is imported in your `app.module.ts`.
3. Run `ng serve` in the project directory.

---

**Example Components:**
- `*ngFor` for options.
- Event bindings for navigation.
- Score calculation in a method. 