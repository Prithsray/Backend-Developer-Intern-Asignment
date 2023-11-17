const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Example question store
const questionStore = [
    { question: "What is the speed of light", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
    { question: "Who developed the theory of relativity?", subject: "Physics", topic: "Relativity", difficulty: "Medium", marks: 8 },
    { question: "What is the capital of France?", subject: "Geography", topic: "World Capitals", difficulty: "Easy", marks: 5 },
    { question: "Solve the equation: 2x + 5 = 15", subject: "Mathematics", topic: "Equations", difficulty: "Medium", marks: 7 },
    { question: "Who wrote 'Romeo and Juliet'?", subject: "Literature", topic: "Shakespeare", difficulty: "Medium", marks: 6 },
    { question: "What is the largest planet in our solar system?", subject: "Astronomy", topic: "Planets", difficulty: "Easy", marks: 4 },
    { question: "Define photosynthesis", subject: "Biology", topic: "Cellular Processes", difficulty: "Hard", marks: 10 },
    { question: "What is the chemical symbol for gold?", subject: "Chemistry", topic: "Elements", difficulty: "Easy", marks: 3 },
    { question: "When was the Declaration of Independence signed?", subject: "History", topic: "American Revolution", difficulty: "Hard", marks: 9 },
    { question: "Name the process by which plants make their own food", subject: "Biology", topic: "Photosynthesis", difficulty: "Medium", marks: 7 },
    { question: "Who painted the Mona Lisa?", subject: "Art", topic: "Paintings", difficulty: "Medium", marks: 6 },
    { question: "What is the formula for the area of a rectangle?", subject: "Mathematics", topic: "Geometry", difficulty: "Easy", marks: 4 },
    { question: "In which year did World War II end?", subject: "History", topic: "World War II", difficulty: "Hard", marks: 8 },
    { question: "Name the process by which water vapor turns into liquid water", subject: "Physics", topic: "States of Matter", difficulty: "Medium", marks: 7 },
    { question: "Who is known as the 'Father of Computer Science'?", subject: "Computer Science", topic: "Pioneers", difficulty: "Hard", marks: 9 },  // Add more questions here
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// API endpoint to generate a question paper
app.post('/generate_paper', (req, res) => {
    const totalMarks = parseInt(req.body.totalMarks);
    const easyPercentage = parseInt(req.body.easyPercentage);
    const mediumPercentage = parseInt(req.body.mediumPercentage);
    const hardPercentage = parseInt(req.body.hardPercentage);
  
    const easyMarks = Math.ceil((totalMarks * easyPercentage) / 100);
    const mediumMarks = Math.ceil((totalMarks * mediumPercentage) / 100);
    const hardMarks = Math.ceil((totalMarks * hardPercentage) / 100);
  
    const selectedQuestions = [];
  
    // Helper function to get questions based on difficulty and marks
    const getQuestions = (difficulty, marks) => {
      return questionStore.filter(q => q.difficulty === difficulty && q.marks <= marks);
    };
  
    // Get questions for each difficulty level
    const easyQuestions = getQuestions('Easy', easyMarks);
    const mediumQuestions = getQuestions('Medium', mediumMarks);
    const hardQuestions = getQuestions('Hard', hardMarks);
  
    // Randomly select questions from each difficulty level
    selectedQuestions.push(...getRandomQuestions(easyQuestions, easyMarks));
    selectedQuestions.push(...getRandomQuestions(mediumQuestions, mediumMarks));
    selectedQuestions.push(...getRandomQuestions(hardQuestions, hardMarks));
  
    // Shuffle the selected questions to make it more random
    shuffleArray(selectedQuestions);
  
    res.json({ questions: selectedQuestions });
  });
  
  // Helper function to randomly select questions
  const getRandomQuestions = (questions, count) => {
    return questions.length <= count ? questions : questions.sort(() => Math.random() - 0.5).slice(0, count);
  };
  
  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
