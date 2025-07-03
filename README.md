# 🧑‍💻 User Management API

A RESTful API built with **Node.js** and **Express.js** for managing user authentication and registration. It supports user operations via `/api/auth` and includes interactive API documentation via Swagger UI.

---

## 🚀 Features

- ✅ User registration and login with JWT authentication  
- ✅ Route protection using middleware  
- ✅ Structured API documentation with Swagger UI  
- ✅ Modular code structure for scalability  

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js  
- **Authentication:** JWT, Bcrypt  
- **Environment Config:** dotenv  
- **Documentation:** Swagger (OpenAPI)  
- **Database:** MongoDB (via Mongoose)  

---

## 📥 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Install Dependencies
```bash
npm install i
```

### 3.Start the server
```bash
node server.js
```
OR 
```bash
nodemon server.js
```

### 📬 API Endpoints

🔐 Auth Routes (/api/auth)
| Method | Endpoint    | Description                               |
| ------ | ----------- | ----------------------------------------- |
| POST   | `/register` | Register a new user                       |
| POST   | `/login`    | Login and receive JWT token               |



📑 Swagger Docs
| Method | Endpoint    | Description                    |
| ------ | ----------- | ------------------------------ |
| GET    | `/api-docs` | Open Swagger UI for all routes |



- The server runs at http://localhost:3000
- The swagger API runs at http://localhost:3000/api-docs/
