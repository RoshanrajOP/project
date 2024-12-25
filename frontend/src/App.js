import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch data from backend API
  useEffect(() => {
    axios.get('http://localhost:5001/api/candidates')
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error('Error fetching candidates', error);
      });
  }, []);

  // Handle search
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter candidates based on search input
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Candidate List Viewer</h1>
      <input 
        type="text" 
        placeholder="Search by Name or Skills" 
        value={search} 
        onChange={handleSearch} 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
