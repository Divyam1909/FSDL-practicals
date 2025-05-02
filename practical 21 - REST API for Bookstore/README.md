# Practical 21 - REST API for Bookstore

This project is a simple REST API for managing a list of books using Node.js and Express.

## Structure
- **index.js**: Contains all the code (Express server).

## Features
- **GET /books**: Returns the list of books (title, author).
- **POST /books**: Adds a new book (expects JSON with `title` and `author`).

## Code Highlights
- Uses an in-memory array for storing books.
- Express JSON middleware for parsing request bodies.
- Simple error handling for missing fields.

## How to Run
1. Run `npm install express` in this folder.
2. Start the server with `node index.js`.
3. Test endpoints using Postman or curl:
   - `GET http://localhost:3000/books`
   - `POST http://localhost:3000/books` with JSON body `{ "title": "Book", "author": "Author" }`

---

**Example Endpoints:**
- `GET /books` to list books.
- `POST /books` to add a book. 