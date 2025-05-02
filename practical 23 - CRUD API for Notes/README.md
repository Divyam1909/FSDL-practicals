# Practical 23 - CRUD API for Notes

This project is a simple REST API for creating, reading, updating, and deleting notes using Node.js, Express, and MongoDB.

## Structure
- **index.js**: Contains all the code (Express server, Mongoose model).

## Features
- **GET /notes**: List all notes.
- **POST /notes**: Create a new note (expects JSON with `title` and `content`).
- **PUT /notes/:id**: Update a note by ID.
- **DELETE /notes/:id**: Delete a note by ID.

## Code Highlights
- Uses Mongoose for MongoDB interaction.
- All endpoints are async and return JSON.

## How to Run
1. Run `npm install express mongoose` in this folder.
2. Ensure MongoDB is running locally (`mongodb://localhost:27017/notesdb`).
3. Start the server with `node index.js`.
4. Test endpoints using Postman or curl.

---

**Example Endpoints:**
- `GET /notes` to list notes.
- `POST /notes` to add a note.
- `PUT /notes/:id` to update a note.
- `DELETE /notes/:id` to delete a note. 