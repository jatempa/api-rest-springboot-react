import { useState, useEffect } from 'react';
import './App.css';

import api from './api/axiosConfig.js';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get('api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
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
