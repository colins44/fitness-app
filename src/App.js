import logo from './logo.svg';
import './App.css';
import { exercises, getMultipleRandom, getRandom } from './data'
import { useState } from 'react'

function App() {
  const [workout, setWorkout] = useState(getMultipleRandom(exercises, 3))

  const removeExersize = (exercise) => {
    const updatedWorkout = [...workout.filter(ex => ex.name !== exercise.name), getRandom()]
    setWorkout(updatedWorkout)
  }
  
  const reloadWorkout = () => {
    setWorkout(getMultipleRandom(exercises, 3))
  }

  const setExersizeNumber = number => {
    setWorkout(getMultipleRandom(exercises, parseInt(number)))
  }

  return (
    <div className="App">
    <header>
      <h1>Fitness App</h1>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <nav>
        <ul>
          <li><a onClick={reloadWorkout}>Reload Workout</a></li>
          <li><a onClick={() => setExersizeNumber(3)}>3 Exersises</a></li>
          <li><a onClick={() => setExersizeNumber(4)}>4 Exersises</a></li>
          <li><a onClick={() => setExersizeNumber(5)}>5 Exersises</a></li>
        </ul>
      </nav>
    </header>

    <div className="container">
      <div className="cards-container">
        {workout.map((ex, index) => {
          return (
            <div key={index} className="card">
            <iframe 
              src={ex.video}
              title={ex.video}
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
            <h3>{ex.name}</h3>
            <p>{ex.instructions}</p>
            <button className="primary" onClick={() => {
            removeExersize(ex);
        }}>Remove</button>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
