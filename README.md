# music-platform
A full-stack music platform that allows users to create, upload, and listen to music tracks with cover images and audio files.

The project is built with **Next.js** on the client side and **NestJS** on the server side, using **MongoDB** for data storage and **Cloudinary** for media hosting.

---

## 🚀 Features

- Create new music tracks
- Upload cover images and audio files
- Store media files in Cloudinary
- Store track data in MongoDB
- View a list of all tracks
- Play audio tracks in the browser
- Responsive UI

---

## 🛠 Tech Stack

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Axios**
- **React Query**
- **Tailwind CSS**
- **Next/Image**

### Backend
- **NestJS**
- **TypeScript**
- **MongoDB + Mongoose**
- **Cloudinary**
- **Multer**
- **@nestjs/config**

---

## 📁 Project Structure

project-root/
├── client/ # Next.js frontend
└── server/ # NestJS backend


---

## ⚙️ Environment Variables

### Backend (`server/.env`)

```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

### Frontend (`client/.env.local`)

NEXT_PUBLIC_API_URL=http://localhost:5000

▶️ Running the Project Locally
1️⃣ Backend
cd server
npm install
npm run start:dev

Server will run on:
http://localhost:5000

2️⃣ Frontend
cd client
npm install
npm run dev

Frontend will run on:
http://localhost:3000

☁️ Deployment:

Backend: Render
Frontend: Vercel
Database: MongoDB Atlas
Media Storage: Cloudinary

📌 Notes:

All media files (images and audio) are stored in Cloudinary.
The application uses multipart/form-data for file uploads.
Environment variables are managed securely and are not committed to the repository.