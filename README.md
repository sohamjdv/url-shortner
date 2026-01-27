🔗 URL Shortener

A simple and efficient URL Shortener built using Node.js, Express, MongoDB, and EJS. This application converts long URLs into short, shareable links and redirects users to the original URL when accessed.

🚀 Features

Shorten long URLs into unique short links

Redirect short URLs to original URLs

MongoDB for persistent storage

Simple and clean UI using EJS

Automatic unique ID generation

Deployed-ready for platforms like Vercel

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Template Engine: EJS

ID Generator: nanoid

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the root directory:
MONGO_URI=your_mongodb_local_url
BASE_URL=http://localhost:8001

4️⃣ Run the application locally
npm start

Open your browser at:
http://localhost:8001
