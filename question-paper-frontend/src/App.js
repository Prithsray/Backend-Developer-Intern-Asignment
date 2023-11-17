import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file


function App() {
  const [questions, setQuestions] = useState([]);
  const [formValues, setFormValues] = useState({
    totalMarks: 0,
    easyPercentage: 0,
    mediumPercentage: 0,
    hardPercentage: 0
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const generatePaper = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate_paper', formValues);
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating paper:', error);
    }
  };

  return (
    <div>
      <h1>Question Paper Generator</h1>
      <div>
        <label>Total Marks:</label>
        <input type="number" name="totalMarks" value={formValues.totalMarks} onChange={handleInputChange} />
      </div>
      <div>
        <label>Easy Percentage:</label>
        <input type="number" name="easyPercentage" value={formValues.easyPercentage} onChange={handleInputChange} />
      </div>
      <div>
        <label>Medium Percentage:</label>
        <input type="number" name="mediumPercentage" value={formValues.mediumPercentage} onChange={handleInputChange} />
      </div>
      <div>
        <label>Hard Percentage:</label>
        <input type="number" name="hardPercentage" value={formValues.hardPercentage} onChange={handleInputChange} />
      </div>
      <button onClick={generatePaper}>Generate Paper</button>
      {questions.length > 0 && (
        <div>
          <h2>Generated Question Paper</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question.question} - {question.difficulty} - {question.marks} marks</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
