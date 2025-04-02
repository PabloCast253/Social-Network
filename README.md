# 💬 Social Network API

A powerful backend API for a social network web application built with TypeScript, Express, MongoDB, and Mongoose. This API supports creating users, sharing thoughts, reacting to others' thoughts, and managing user friend lists — ideal for social media platforms dealing with large, unstructured data.

---

## 🚀 Features

- Full CRUD for Users and Thoughts
- Nested Reactions within Thoughts
- Friend relationships between Users
- Virtual properties (friendCount, reactionCount)
- Timestamp formatting using getters
- Written in TypeScript for strong typing
- Organized MVC structure

---

## 📁 Technologies Used

- TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- ts-node-dev (development server)

##🌐 API Endpoints
Users
GET /api/users – Get all users

GET /api/users/:id – Get one user with thoughts & friends

POST /api/users – Create a new user

PUT /api/users/:id – Update a user

DELETE /api/users/:id – Delete a user and their thoughts

POST /api/users/:userId/friends/:friendId – Add a friend

DELETE /api/users/:userId/friends/:friendId – Remove a friend

Thoughts
GET /api/thoughts – Get all thoughts

GET /api/thoughts/:id – Get one thought

POST /api/thoughts – Create a thought (and associate with user)

PUT /api/thoughts/:id – Update a thought

DELETE /api/thoughts/:id – Delete a thought

Reactions (nested inside thoughts)
POST /api/thoughts/:thoughtId/reactions – Add a reaction

DELETE /api/thoughts/:thoughtId/reactions/:reactionId – Remove a reaction

##📽️ Walkthrough Video
link:

##🛠️ Future Improvements
JWT authentication

Frontend interface

Pagination for users/thoughts

Likes/dislikes or nested reply support

🧑‍💻 Author
Pablo Castro
Bootcamp Full-Stack Developer

## 🔧 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/social-network-api.git
   cd social-network-api
   npm i
   npm run dev

   
