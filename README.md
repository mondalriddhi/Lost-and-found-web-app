
# 🔍 Digital Lost & Found Portal

![Project Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Tech Stack](https://img.shields.io/badge/Full%20Stack-Java%20%2B%20React-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> A secure, full-stack web application designed to bridge the gap between lost items and their owners through a centralized, real-time reporting platform.

---

## 🚀 Live Demo
**Frontend (Vercel):** [https://lost-and-found-web-app-frontend.vercel.app](https://lost-and-found-web-app-frontend.vercel.app)  
**Backend API (Render):** [https://lost-and-found-web-app-api.onrender.com/](https://lost-and-found-web-app-api.onrender.com/)

---

## 📖 Project Overview
The **Lost & Found Portal** solves the inefficiency of manual logs and physical bulletin boards. It allows users to digitally report lost or found items with image evidence, creating a searchable database accessible from anywhere.

The application follows a **stateless, decoupled architecture** ensuring scalability and security. It leverages **Cloud Storage** for media and a **Managed Database** for persistence, simulating a modern production-grade environment.

### ✨ Key Features
* **🔐 Secure Authentication:** Implemented **JWT (JSON Web Tokens)** for stateless session management and **BCrypt** for password encryption.
* **📸 Image Uploads:** Integrated **Cloudinary** for handling image storage, preventing database bloat.
* **☁️ Cloud Native:** Fully deployed on **Render (Backend)**, **Vercel (Frontend)**, and **Supabase (PostgreSQL)**.
* **📱 Responsive UI:** Built with **React & Vite** for a fast, mobile-friendly experience.
* **🛡️ Robust Security:** Custom Spring Security configuration with **CORS** whitelisting and Role-Based Access Control (RBAC).

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React.js (Vite)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Routing:** React Router DOM v6
* **HTTP Client:** Axios (with Interceptors for Auth headers)
* **Styling:** CSS3 / Styled Components

### **Backend**
* **Language:** Java 21
* **Framework:** Spring Boot 3
* **Security:** Spring Security 6, JWT
* **Database Interaction:** Spring Data JPA, Hibernate
* **Build Tool:** Maven

### **Infrastructure & Tools**
* **Database:** PostgreSQL (Supabase)
* **Storage:** Cloudinary (Object Storage)
* **Deployment:** Render (Dockerized Java), Vercel (React)
* **Version Control:** Git & GitHub

---

## 🏗️ System Architecture

The application uses a **RESTful API** design pattern.

1.  **Client:** React sends HTTP requests (GET/POST) to the Backend.
2.  **Security Layer:** Spring Security Filter Chain intercepts requests, validating JWTs.
3.  **Controller:** Handles the Request/Response cycle.
4.  **Service Layer:** Contains business logic (e.g., uploading images to Cloudinary).
5.  **Repository:** Talks to the PostgreSQL database via Hibernate.



---

## 📸 Screenshots

| Login & Auth | Dashboard | Report Item |
|:---:|:---:|:---:|
| *(![Login & Auth]login.png)* | *(![Dashboard]dashboard.png)* | *(![Report Item]reportItem.png)* |


---

