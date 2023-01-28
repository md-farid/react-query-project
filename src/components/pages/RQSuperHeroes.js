import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function RQSuperHeroes() {
  const { isLoading, data } = useQuery('super-heroes', () => {
    return axios.get('http://localhost:4000/superheroes');
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <React.Fragment>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </React.Fragment>
  );
}

export default RQSuperHeroes;
