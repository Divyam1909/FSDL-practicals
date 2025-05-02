# Practical 22 - User Login System (Mock)

This project is a simple login system with hardcoded credentials using Node.js and Express.

## Structure
- **index.js**: Contains all the code (Express server).

## Features
- **POST /login**: Accepts JSON with `username` and `password`.
- **Hardcoded Credentials**: Username: `admin`, Password: `1234`.
- **Response**: Returns `{ status: 'success' }` or `{ status: 'failure' }`.

## Code Highlights
- Uses Express JSON middleware for parsing request bodies.
- Simple logic for credential checking.

## How to Run
1. Run `npm install express` in this folder.
2. Start the server with `node index.js`.
3. Test endpoint using Postman or curl:
   - `POST http://localhost:3000/login` with JSON body `{ "username": "admin", "password": "1234" }`

---

**Example Endpoint:**
- `POST /login` to check credentials. 