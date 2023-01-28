import axios from 'axios';
import { useState, useEffect } from 'react';

function SuperHeroes() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setHeroes(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Super Heroes</h2>
      {heroes.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
}

export default SuperHeroes;
