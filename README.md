# Comfort Footwear 👟

A full-stack footwear e-commerce web application built with React and Spring Boot.

Comfort Footwear is designed as a modern e-commerce platform where users can browse footwear collections and securely authenticate using JWT-based authentication.

---

## 🚀 Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript
- Vite

### Backend

- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Maven

### Database

- MongoDB

---

## ✨ Features

### Authentication & Authorization

- User registration
- User login
- Password-based authentication
- JWT-based authentication
- Short-lived access tokens
- Refresh tokens
- Protected API endpoints
- Automatic access-token refresh
- Axios interceptor for authenticated requests

### Frontend

- React-based SPA
- Client-side routing
- Responsive UI
- Dark / Light mode
- Authentication pages
- Men's footwear collection
- Women's footwear collection
- Product pages
- About page
- Contact page
- Error page

### Backend

- REST APIs
- Spring Security configuration
- User authentication
- Protected endpoints
- JWT token generation
- Refresh-token based authentication
- User service and repository layers
- DTO-based request/response handling

---

## 🔐 Authentication Flow

Comfort Footwear uses JWT-based authentication with access and refresh tokens.

```text
User
 │
 │ Login
 ▼
Frontend
 │
 │ POST /auth/login
 ▼
Spring Boot Backend
 │
 │ Authenticate credentials
 ▼
JWT Service
 │
 ├── Access Token
 └── Refresh Token
 │
 ▼
Frontend
 │
 └── Stores tokens

Comfort-Footwear/
│
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── in/strikes/comfortFootwear/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       ├── dto/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── service/
│   │   │   └── resources/
│   │   └── test/
│   │
│   └── pom.xml
│
├── Frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md


🛠️ Getting Started
Prerequisites

Make sure you have the following installed:

Java
Maven
Node.js
npm
MongoDB


⚙️ Backend Setup

Navigate to the backend directory:

cd Backend

Configure your application properties and environment variables.

Then start the Spring Boot application:

./mvnw spring-boot:run

On Windows:

mvnw.cmd spring-boot:run

The backend will run on:

http://localhost:8080
💻 Frontend Setup

Navigate to the frontend directory:

cd Frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will then be available through the Vite development server.

🔑 API Authentication
Login
POST /auth/login

Example request:

{
  "email": "user@example.com",
  "password": "password"
}

The backend returns an access token and refresh token after successful authentication.

Protected Endpoint
GET /api/user/hello

Authenticated requests use:

Authorization: Bearer <access-token>
