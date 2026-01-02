# Node.js Task Management API

A lightweight, high-performance REST API built with **Express 5** and **MySQL2**. This project features a custom-built rate limiter to prevent API abuse and utilizes modern Node.js features like built-in file watching.

## 🚀 Features

- **Express 5.x**: Leveraging the latest features and improved routing.
- **MySQL2**: Fast and secure database operations with prepared statements.
- **Custom Rate Limiter**: Built-in protection against brute-force and DoS attacks.
- **Zero-Dependency Dev Mode**: Uses Node.js --watch (no Nodemon required).
- **CORS & Environment Support**: Pre-configured for cross-origin requests and secure environment variables.

## 🛠️ Installation & Setup

### 1\. Clone the repository

`git clone https://github.com/HuyTranTuan/f8-node-day-3-be.git`

### 2\. Install Dependencies

` npm install ` or `npm i`

### 3\. Database Configuration

Create a .env file in the root directory and add your MySQL credentials:
Setup your .env file:
`PORT=3000`
`DB_HOST=localhost`
`DB_USER=root`
`DB_PASSWORD=your_password`
`DB_NAME=your_database_name `

### 4\. Database Schema

Ensure you have a tasks table in your MySQL database:

Create table with this command:
` CREATE TABLE tasks (id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,title VARCHAR(255),completed TINYINT(1) DEFAULT 0,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP); `

## 🏃 Running the Project

Runs the server with the native Node.js watcher. The server will restart automatically when you save changes.
` npm run dev ` or ` node --watch server.js `

## 🔌 API Endpoints

**GET** /tasks (Retrieve all tasks)
**POST** /tasks (Create a new task)
**PUT** /tasks/:id (Update a task by ID)
**DELETE** /tasks/:id (Delete a task)

## 🛡️ Rate Limiting

This API includes a custom middleware located at /src/middlewares/rateLimiter.js.

- **Default Limit**: 100 requests per minute per IP.
- **Response**: Returns a 429 Too Many Requests status when the limit is exceeded.

## 📦 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/)
- **Driver**: [mysql2/promise](https://github.com/sidorares/node-mysql2)
