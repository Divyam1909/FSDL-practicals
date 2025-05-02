# Practical 12 - React Todo List

This project is a simple to-do list app built with React and local storage support.

## Structure
- **App.js**: Contains all the code (React component).

## Features
- **Add Task**: Enter a task and click 'Add' or press Enter.
- **Delete Task**: Click 'Delete' to remove a task.
- **Persistence**: Tasks are saved in browser local storage.

## Code Highlights
- Uses React's `useState` and `useEffect` hooks.
- Reads/writes tasks to local storage for persistence.
- All logic and UI in a single functional component.

## How to Run
1. Place `App.js` in a React project (e.g., created with `create-react-app`).
2. Run `npm start` in the project directory.

---

**Example Components:**
- `<input>` for task entry.
- `<ul>` for the task list.
- React state and local storage for persistence. 