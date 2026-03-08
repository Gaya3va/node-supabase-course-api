# node-supabase-course-api


This is a simple Node.js backend project that connects to Supabase and provides APIs to manage courses and student enrollments.

## Tech Stack
- Node.js
- Express.js
- Supabase
- dotenv
- cors

## Installation

1. Clone the repository


git clone <your-repo-link>


2. Install dependencies


npm install


3. Create a `.env` file


SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3000


4. Start the server


node server.js


Server will run at:


http://localhost:3000


---

## API Routes

### 1. Get all courses


GET /courses


### 2. Enroll student


POST /enroll


Body


{
"student_name": "Rahul",
"course_id": 1
}


### 3. Get enrollments for a course


GET /courses/:id/enrollments


---

## Project Structure


node-supabase-course-api
│
├── server.js
├── supabaseClient.js
├── routes
│ └── courses.js
├── middleware
│ ├── logger.js
│ └── validateEnrollment.js
├── package.json
└── README.md