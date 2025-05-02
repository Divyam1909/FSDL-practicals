# Practical 24 - URL Shortener (Basic)

This project is a simple URL shortener API using Node.js, Express, and MongoDB.

## Structure
- **index.js**: Contains all the code (Express server, Mongoose model).

## Features
- **POST /shorten**: Accepts a long URL and returns a short code.
- **GET /:code**: Redirects to the original long URL.
- **MongoDB**: Stores code-to-URL mappings.

## Code Highlights
- Uses Mongoose for MongoDB interaction.
- Generates a random 6-character code for each URL.
- All logic in a single file.

## How to Run
1. Run `npm install express mongoose` in this folder.
2. Ensure MongoDB is running locally (`mongodb://localhost:27017/urlshort`).
3. Start the server with `node index.js`.
4. Test endpoints using Postman or curl.

---

**Example Endpoints:**
- `POST /shorten` with JSON `{ "long": "https://example.com" }`.
- `GET /:code` to redirect to the original URL. 