# Practical 20 - Angular Movie Search (Static Data)

This project is a simple Angular app to display and search a hardcoded list of movies.

## Structure
- **app.component.ts**: Contains all the code (Angular component).

## Features
- **Movie List**: Shows a list of movies with title and year.
- **Search**: Filter movies by title using an input field.

## Code Highlights
- Uses Angular's `[(ngModel)]` for search input.
- Uses a custom filter pipe for searching (see code comments).
- All logic and UI in a single component.

## How to Run
1. Place `app.component.ts` in an Angular project (e.g., generated with `ng new`).
2. Add the `FilterPipe` code (see comment in file) to your project.
3. Ensure `FormsModule` is imported in your `app.module.ts`.
4. Run `ng serve` in the project directory.

---

**Example Components:**
- `<input [(ngModel)]="query">` for search.
- `*ngFor` for movie listing.
- Custom pipe for filtering. 