# Practical 25 - Contact Form Backend

This project is a simple backend API to save contact form submissions using Node.js, Express, and MongoDB.

## Structure
- **index.js**: Contains all the code (Express server, Mongoose model).

## Features
- **POST /contact**: Accepts JSON with `name`, `email`, and `message`.
- **MongoDB**: Stores submissions in a collection.
- **Validation**: All fields are required.

## Code Highlights
- Uses Mongoose for MongoDB interaction.
- Simple validation for required fields.
- All logic in a single file.

## How to Run
1. Run `npm install express mongoose` in this folder.
2. Ensure MongoDB is running locally (`mongodb://localhost:27017/contactdb`).
3. Start the server with `node index.js`.
4. Test endpoint using Postman or curl.

---

**Example Endpoint:**
- `POST /contact` with JSON `{ "name": "John", "email": "john@email.com", "message": "Hello!" }` 