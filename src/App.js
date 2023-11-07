import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [toDos, setToDOs] = useState([]);
  const [toDo, setToDO] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);

    setCurrentDay(dayOfWeek);
    setCurrentDate(formattedDate);
  }, []);

  const handleAddToDo = () => {
    setToDOs([...toDos, toDo]);
    setToDO(''); // Clear the input field after adding a task
  };

  const handleRemoveToDo = (index) => {
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);
    setToDOs(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Today is {currentDate}🕐</h2>
        <h2>And, it's {currentDay}⬅️📅</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDO(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>

      {toDos.map((value, index) => (
        <div className="todos" key={index}>
          <div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>{value}</p>
            </div>
            <div className="right">
              <i onClick={() => handleRemoveToDo(index)} className="fas fa-times"></i>
            </div>
          </div>
        </div>
      ))}
      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Robin Rajan</p>
      </footer>
    </div>
  );
}

export default App;
