 # Student Management REST API

A REST API built using **Node.js and Express.js** to manage student records.

## Features

* GET all students
* GET student by ID
* POST new student
* PUT/update student
* DELETE student
* Custom middleware
* Request validation
* Centralized error handling
* JSON responses

## Project Structure

```text
student-service/
├── middleware/
├── routes/
├── controllers/
├── server.js
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Run

```bash
node server.js
```

Server:

```text
http://localhost:3000
```

## API Routes

| Method | Route           | Purpose           |
| ------ | --------------- | ----------------- |
| GET    | `/students`     | Get all students  |
| GET    | `/students/:id` | Get student by ID |
| POST   | `/students`     | Add student       |
| PUT    | `/students/:id` | Update student    |
| DELETE | `/students/:id` | Delete student    |

## Testing

APIs can be tested using **Postman** or **Thunder Client**.

The API handles invalid IDs, missing fields, student-not-found errors, unsupported routes, and server errors.
