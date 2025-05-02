# Practical 13 - Weather App (Static Data)

This project is a simple weather app built with React, displaying hardcoded weather information.

## Structure
- **App.js**: Contains all the code (React components).

## Features
- **Displays City Name**
- **Shows Temperature and Description**
- **Uses Props**: Weather info is passed as props to the component.

## Code Highlights
- Functional component `Weather` receives `city`, `temp`, and `desc` as props.
- All logic and UI in a single file.
- Inline styles for layout and appearance.

## How to Run
1. Place `App.js` in a React project (e.g., created with `create-react-app`).
2. Run `npm start` in the project directory.

---

**Example Components:**
- `<Weather city="Mumbai" temp={32} desc="Sunny" />` for weather display.
- Props for passing weather data. 