# **JWT Authentication Monorepo 🚀**

**A fun, full-stack todo app to master JWT authentication!**
This monorepo uses **npm workspaces** to manage a **React (TypeScript) frontend** and an **Express (JavaScript) backend**. Perfect for learning how to implement **JWT (JSON Web Token) authentication** in a real-world app.

## **📌 Table of Contents**

- [**JWT Authentication Monorepo 🚀**](#jwt-authentication-monorepo-)
  - [**📌 Table of Contents**](#-table-of-contents)
  - [**🎯 Project Structure**](#-project-structure)
  - [**🛠 Prerequisites**](#-prerequisites)
  - [**🚀 Getting Started**](#-getting-started)
  - [**🏗 Workspaces**](#-workspaces)
    - [**🎨 Client (React + TypeScript)**](#-client-react--typescript)
      - [**Key Dependencies:**](#key-dependencies)
      - [**Available Scripts:**](#available-scripts)
    - [**🖥 Server (Express + JavaScript)**](#-server-express--javascript)
      - [**Key Dependencies:**](#key-dependencies-1)
      - [**Available Scripts:**](#available-scripts-1)
  - [**🔐 JWT Authentication Flow**](#-jwt-authentication-flow)
  - [**🌍 Environment Variables**](#-environment-variables)
    - [**Client (`./client/.env`)**](#client-clientenv)
    - [**Server (`./api/.env`)**](#server-apienv)
  - [**📜 Scripts**](#-scripts)
  - [**📄 License**](#-license)

---

## **🎯 Project Structure**

```
jwt-auth-monorepo/
├── package.json          # 🏠 Root package.json (workspaces config)
├── client/               # 🎨 React + TypeScript frontend
│   ├── package.json
│   ├── src/
│   └── ...
├── api/                  # 🖥 Express + JavaScript backend
│   ├── package.json
│   ├── src/
│   └── ...
└── README.md             # 📖 You're here!
```

---

## **🛠 Prerequisites**

- **Node.js** (v20 or later)
- **npm** (v10 or later)
- Basic knowledge of **React**, **Express**, and **JWT**

---

## **🚀 Getting Started**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HarenaFiantso/jwt-auth-monorepo
   cd jwt-auth-monorepo
   ```
2. **Install dependencies:**
   ```bash
   npm install # Installs everything for both client and API!
   ```
3. **Set up environment variables:**
   Create `.env` files in both `client/` and `api/` directories. See [Environment Variables](#-environment-variables) for details.
4. **Start the development servers:**
   ```bash
   npm run dev # 🚀 Launches both client and server in dev mode!
   ```

---

## **🏗 Workspaces**

### **🎨 Client (React + TypeScript)**

- **Location:** `./client`
- **Tech Stack:** React, TypeScript, Axios, React Router
- **Features:**
  - User registration and login
  - Todo CRUD operations
  - JWT storage and authentication
  - Protected routes

#### **Key Dependencies:**

- `react`
- `react-dom`
- `axios`
- `react-router`

#### **Available Scripts:**

| Script  | Description                        |
| ------- | ---------------------------------- |
| `start` | Start the React development server |
| `build` | Build the React app for production |
| `dev`   | Start the development server       |

---

### **🖥 Server (Express + JavaScript)**

- **Location:** `./api`
- **Tech Stack:** Express, JSONWebToken, bcrypt, Prisma + SQLite
- **Features:**
  - User registration and login endpoints
  - JWT generation and validation
  - Todo CRUD endpoints
  - Middleware for protected routes

#### **Key Dependencies:**

- `express`
- `jsonwebtoken`
- `bcrypt`
- `prisma`
- `cors`
- `dotenv`

#### **Available Scripts:**

| Script  | Description                   |
| ------- | ----------------------------- |
| `start` | Start the Express server      |
| `dev`   | Start the server with nodemon |

---

## **🔐 JWT Authentication Flow**

1. **User Registration:**
   - User registers with email and password.
   - Password is hashed and stored in the database.
2. **User Login:**
   - User logs in with email and password.
   - Server validates credentials and generates a **JWT**.
   - JWT is sent to the client and stored (e.g., in localStorage or cookies).
3. **Protected Routes:**
   - Client includes the JWT in the `Authorization` header for protected requests.
   - Server validates the JWT and grants access to protected resources.
4. **Logout:**
   - Client removes the JWT from storage.

---

## **🌍 Environment Variables**

### **Client (`./client/.env`)**

```env
VITE_API_URL=http://our-api-url.com
```

### **Server (`./api/.env`)**

```env
PORT=choose_your_port
JWT_SECRET=this_need_to_be_a_secret
DATABASE_URL=the_url_database
```

---

## **📜 Scripts**

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm install`        | Install dependencies for all workspaces  |
| `npm run dev`        | Start both client and server in dev mode |
| `npm run dev:server` | Start server in dev mode                 |
| `npm run dev:client` | Start client in dev mode                 |

---

## **📄 License**

This project is licensed under the **MIT License**.

---

**🎉 Ready to dive in? Start coding and have fun!** 🚀
