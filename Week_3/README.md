# 🚀 ATP - Week 3

## 📖 Overview

This repository contains the assignments, practice exercises, and a full backend project completed during **Week 3** of the ATP Training Program.

This week focused on transitioning to database management and advanced backend development:
- MongoDB fundamentals (Databases, Collections, Documents)
- MongoDB shell commands & CRUD operations
- Mongoose ODM & Schema Validation
- Node.js & Express RESTful APIs
- User Authentication (JWT & Cookies)
- Modular Backend Architecture & Error Handling

---

## 📂 Repository Structure

```text
Week_3/
│
├── Product&User_Backend/
│   ├── APIs/
│   │   ├── ProductAPI.js
│   │   └── UsersAPI.js
│   ├── middlewares/
│   │   └── verifytoken.js
│   ├── models/
│   │   ├── ProductModel.js
│   │   └── UserModel.js
│   ├── contollers/
│   ├── auth/
│   ├── reqq.http
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── MongoDbPractice.txt
└── README.md
```

---

# 📅 MongoDB Fundamentals

## 📚 Topics Covered
- Understanding Document-based NoSQL Databases
- Basic MongoDB Shell Commands
- Collections and Documents
- CRUD (Create, Read, Update, Delete) Operations
- Query Execution and Filtering

### 📄 File Descriptions
- **MongoDbPractice.txt**  
  Contains MongoDB practice commands, queries, and examples of basic database operations.

---

# 📅 Product & User Backend Application

## 📚 Features & Architecture
A robust Node.js and Express backend demonstrating real-world backend architectural patterns.

### Core Implementation
- **Mongoose ODM:** Connection to MongoDB using Mongoose, including schemas with validation (`UserModel` and `ProductModel`).
- **RESTful API:** Dedicated routers for users (`/user-api`) and products (`/product-api`).
- **Authentication:** JWT-based user authentication stored securely in cookies.
- **Middleware:** Custom middleware implementation (`verifytoken.js`) to protect private routes.
- **Error Handling:** Centralized custom error-handling middleware catching `ValidationError`, `CastError`, and server-side errors.
- **Environment Management:** Use of `.env` files to keep `DB_URL` and `PORT` secure.

### 📝 Key Files
- **server.js**: Main entry point configuring Express, connecting to MongoDB Atlas, defining body/cookie parsers, and setting up error handling.
- **models/**: Contains the database schema definitions and validations.
- **APIs/**: Contains the route handlers and business logic for `users` and `products`.
- **reqq.http**: HTTP request file used in VS Code to test the API endpoints.

---

## 💡 Key Learnings

During Week 3, I learned and practiced:
- MongoDB document structure and execution of complex queries.
- Connecting a Node.js application to a MongoDB database using Mongoose.
- Designing a modular backend architecture separating models, APIs, and middlewares.
- Implementing secure user registration, login, and token generation using `bcryptjs` and `jsonwebtoken`.
- Handling errors gracefully through Express error middleware.
- Parsing and managing HTTP cookies for authentication.