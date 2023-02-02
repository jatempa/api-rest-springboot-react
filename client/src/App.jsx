import { useState, useEffect } from 'react';
import './App.css';

import api from './api/axiosConfig.js';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await api.get('api/v1/movies');
    console.log(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <p>x</p>
    </div>
  );
}

export default App;
