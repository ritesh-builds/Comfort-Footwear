# Comfort Footwear 👟

A full-stack footwear e-commerce web application built using **React** and **Spring Boot**.

Comfort Footwear is a modern web application that provides a responsive shopping experience with user authentication, protected APIs, JWT-based security, and a React-based frontend.

---

## 🚀 Tech Stack

### Frontend

- React
- JavaScript
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API

### Backend

- Java
- Spring Boot
- Spring Security
- JWT
- Maven
- REST APIs

### Database

- MySQL

---

## ✨ Features

### 🔐 Authentication & Security

- User registration
- User login
- Password-based authentication
- JWT-based authentication
- Access tokens
- Refresh tokens
- Protected REST APIs
- Automatic access-token refresh
- Axios interceptor for authenticated API requests
- Spring Security based request authorization

### 💻 Frontend

- React Single Page Application (SPA)
- Client-side routing with React Router
- Responsive user interface
- Dark and light theme
- Authentication pages
- Men's footwear collection
- Women's footwear collection
- Product pages
- About page
- Contact page
- Error page

### ⚙️ Backend

- RESTful API architecture
- Spring Security configuration
- User authentication and authorization
- JWT token generation
- Refresh-token based authentication
- User service and repository layers
- DTO-based request and response handling
- Protected API endpoints

---

## 🔐 Authentication Flow

Comfort Footwear uses JWT-based authentication with short-lived access tokens and longer-lived refresh tokens.

### Login Flow

```text
User
 │
 │ Login credentials
 ▼
React Frontend
 │
 │ POST /auth/login
 ▼
Spring Boot Backend
 │
 │ Authenticate credentials
 ▼
Spring Security
 │
 │ Authentication successful
 ▼
JWT Service
 │
 ├── Access Token
 └── Refresh Token
 │
 ▼
React Frontend
 │
 └── Stores tokens
 ```

```
React Frontend
 │
 │ GET /api/user/hello
 │ Authorization: Bearer <access-token>
 ▼
Spring Boot Backend
 │
 │ Validate JWT
 ▼
Spring Security
 │
 ▼
Protected Endpoint
 │
 ▼
Response
```

```
Access Token Expired
        │
        ▼
Protected API
        │
        ▼
       401
        │
        ▼
Axios Interceptor
        │
        ▼
Refresh Token
        │
        ▼
New Access Token
        │
        ▼
Retry Original Request
        │
        ▼
Successful Response
```
# Project Structure

```
Comfort-Footwear/
│
├── Backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── in/
│   │   │   │       └── strikes/
│   │   │   │           └── comfortFootwear/
│   │   │   │               ├── config/
│   │   │   │               ├── controller/
│   │   │   │               ├── dto/
│   │   │   │               ├── model/
│   │   │   │               ├── repository/
│   │   │   │               └── service/
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── Frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```
