# Question-Paper-Generator
A assignment Repo for Backend Development @ Reelo

This is a Question Paper Generator application built with React for the frontend and Express for the backend. It allows users to store and generate question papers based on specified criteria.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Store questions with attributes such as question, subject, topic, difficulty, and marks.
- Generate question papers based on specified criteria (total marks, difficulty distribution).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/question-paper-generator.git

2. Navigate to the project directory:

    ```bash
      cd question-paper-generator

3. Install dependencies for both the frontend and backend:

      ```bash
        npm install
        cd client
        npm install

## Usage
1.Start the development environment:

      ```bash
      npm run dev

This command will concurrently start the Express server and the React app.

2.Access the application in your web browser:

Frontend (React): http://localhost:3000 <br>
Backend (Express): http://localhost:3001<br>

Use the application to add questions and generate question papers.

3.API Endpoints : <br>
GET /questions  :   Retrieve all stored questions. <br>
POST /add_question  :   Add a new question to the store. <br>
POST /generate_paper  :   Generate a question paper based on specified criteria.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.




   
