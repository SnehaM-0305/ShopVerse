# ShopVerse

ShopVerse is a full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application that allows users to browse, search, and purchase products online. It features user authentication, product management, shopping cart functionality, and an admin dashboard for managing inventory.

## Features

- User authentication & authorization using JWT  
- Product browsing, searching, and filtering  
- Shopping cart functionality  
- Admin dashboard for product management  
- RESTful APIs built with Node.js and Express  
- MongoDB database integration  
- Responsive frontend built with React  

## Tech Stack

- Frontend: React, HTML, CSS, JavaScript  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Authentication: JWT  
- Media storage: Cloudinary  
- Development: Nodemon, VS Code  

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SnehaM-0305/ShopVerse.git
   cd ShopVerse
   ```

2.Install backend dependencies:
```bash
cd backend
npm install
```

3.Install frontend dependencies
```bash
cd ../frontend
npm install
```

4.Create a .env file inside the backend folder and add the following environment variables:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Running the Application
Backend

In the backend folder, run:
```bash
npm run dev
```
## Frontend


In the frontend folder, run:

```bash
npm start
```

## Folder Structure
```
ShopVerse/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  └─ app.js
├─ frontend/
│  ├─ src/
│  └─ public/
├─ package.json
├─ package-lock.json
└─ README.md
```
