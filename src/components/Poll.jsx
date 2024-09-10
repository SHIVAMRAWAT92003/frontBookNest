// // components/Poll.jsx
// import React, { useState } from "react";
// import Navbar from '../components/Navbar';
// import './Poll.css';

// function Poll() {
//   const [options, setOptions] = useState([
//     { id: 1, text: "Fiction", votes: 0 },
//     { id: 2, text: "Non-Fiction", votes: 0 }
//   ]);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [newOption, setNewOption] = useState("");

//   const handleVote = (id) => {
//     if (selectedOptions.includes(id)) {
//       // If option is already selected, deselect it
//       setSelectedOptions(prev => prev.filter(optionId => optionId !== id));
//       setOptions(prevOptions =>
//         prevOptions.map(option =>
//           option.id === id ? { ...option, votes: option.votes - 1 } : option
//         )
//       );
//     } else {
//       // Add option to selected list
//       setSelectedOptions(prev => [...prev, id]);
//       setOptions(prevOptions =>
//         prevOptions.map(option =>
//           option.id === id ? { ...option, votes: option.votes + 1 } : option
//         )
//       );
//     }
//   };

//   const handleAddOption = () => {
//     if (newOption.trim()) {
//       setOptions(prevOptions => [
//         ...prevOptions,
//         { id: prevOptions.length + 1, text: newOption.trim(), votes: 0 }
//       ]);
//       setNewOption("");
//     }
//   };

//   const handleDeleteOption = (id) => {
//     setOptions(prevOptions => prevOptions.filter(option => option.id !== id));
//     setSelectedOptions(prevSelected =>
//       prevSelected.filter(optionId => optionId !== id)
//     );
//   };

//   return (
//     <>
//       <div className="navbar-container">
//         <Navbar />
//       </div>
//       <div className="poll-container">
//         <div className="poll-header">
//           <h1 className="h1">What is your favorite book genre?</h1>
//         </div>
//         <div className="poll-buttons">
//           {options.map((option) => (
//             <div key={option.id} className="poll-button-container">
//               <button
//                 className={`poll-button ${selectedOptions.includes(option.id) ? "selected" : ""}`}
//                 onClick={() => handleVote(option.id)}
//               >
//                 {option.text}
//               </button>
//               {/* Render delete button only for user-added options */}
//               {option.id > 2 && (
//                 <button
//                   className="delete-button"
//                   onClick={() => handleDeleteOption(option.id)}
//                 >
//                   Delete
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="poll-results">
//           <h3>Results:</h3>
//           {options.map((option) => (
//             <p key={option.id}>
//               {option.text}: {option.votes}
//             </p>
//           ))}
//         </div>
//         <div className="add-option-container">
//           <input
//             className="add-option-input"
//             type="text"
//             value={newOption}
//             onChange={(e) => setNewOption(e.target.value)}
//             placeholder="Add new option"
//           />
//           <button className="add-option-button" onClick={handleAddOption}>
//             Add Option
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Poll;

// components/Poll.jsx
import React, { useState } from "react";
import Navbar from '../components/Navbar';
import './Poll.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function Poll() {
  const [options, setOptions] = useState([
    { id: 1, text: "Fiction", votes: 0 },
    { id: 2, text: "Non-Fiction", votes: 0 }
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newOption, setNewOption] = useState("");

  const handleVote = (id) => {
    const optionSelected = selectedOptions.includes(id);

    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, votes: optionSelected ? option.votes - 1 : option.votes + 1 }
          : option
      )
    );

    setSelectedOptions((prev) =>
      optionSelected ? prev.filter((optionId) => optionId !== id) : [...prev, id]
    );
  };

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions((prevOptions) => [
        ...prevOptions,
        { id: prevOptions.length + 1, text: newOption.trim(), votes: 0 }
      ]);
      setNewOption("");
    }
  };

  const handleDeleteOption = (id) => {
    setOptions((prevOptions) => prevOptions.filter((option) => option.id !== id));
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((optionId) => optionId !== id)
    );
  };

  const chartData = {
    labels: options.map(option => option.text),
    datasets: [{
      label: 'Votes',
      data: options.map(option => option.votes),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  };

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="poll-container">
        <div className="poll-header">
          <h2>What is your favorite book genre?</h2>
        </div>
        <div className="poll-buttons">
          {options.map((option) => (
            <div key={option.id} className="poll-button-container">
              <button
                className={`poll-button ${selectedOptions.includes(option.id) ? "selected" : ""}`}
                onClick={() => handleVote(option.id)}
              >
                {option.text}
              </button>
              {option.id > 2 && (
                <button
                  className="delete-button"
                  onClick={() => handleDeleteOption(option.id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="poll-results">
          <h3>Results:</h3>
          <Bar data={chartData} />
          {options.map((option) => (
            <p key={option.id}>
              {option.text}: {option.votes} ({((option.votes / options.reduce((acc, opt) => acc + opt.votes, 0)) * 100).toFixed(2)}%)
            </p>
          ))}
        </div>
        <div className="add-option-container">
          <input
            className="add-option-input"
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Add new option"
          />
          <button className="add-option-button" onClick={handleAddOption}>
            Add Option
          </button>
        </div>
      </div>
    </>
  );
}

export default Poll;
