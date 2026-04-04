# 💰 Finance Backend API

A simple backend system to manage financial records with role-based access control. Built using Node.js, Express, MongoDB, and JWT authentication.

---

## 🚀 Features

* 🔐 JWT Authentication
* 👥 Role-Based Access Control (Admin / Analyst / Viewer)
* 📊 Financial Records CRUD (Create, Read, Update, Delete)
* 📅 Filter records by date, category, and type
* 📈 Dashboard APIs:

  * Total Income
  * Total Expense
  * Net Balance
  * Category Breakdown
  * Recent Transactions
* ⚠️ Input validation and error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)

---

## 📁 Project Structure

```
finance-backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
├── .gitignore
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <https://github.com/KshitijKashyap07/finance-tracker.git>
cd finance-tracker
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Roles & Permissions

| Role    | Access                               |
| ------- | ------------------------------------ |
| Viewer  | View dashboard only                  |
| Analyst | View records + insights              |
| Admin   | Full access (CRUD + user management) |

---

## 📌 API Endpoints

### Auth

* `POST /api/auth/login`

### Records

* `GET /api/records` → Get records (with filters)
* `POST /api/records` → Create record (Admin)
* `PATCH /api/records/:id` → Update record (Admin)
* `DELETE /api/records/:id` → Delete record (Admin)

### Dashboard

* `GET /api/dashboard` → Financial summary

---

## 🔎 Filtering Example

```
/api/records?type=income&category=salary
/api/records?startDate=2024-01-01&endDate=2024-12-31
```

---

## 🧪 Testing

Use Postman to test APIs.

Add token in headers:

```
Authorization: Bearer <your_token>
```

---

## ⚠️ Notes

* Only Admin can create/update/delete records
* Analyst can view records and analytics
* Viewer can only access dashboard
* Sensitive files like `.env` are ignored using `.gitignore`

