import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

function RQSuperHeroes() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      /** When isLoading true or false that's means network call is happened forground or not */
      //cacheTime: 30000,
      /** When isFetching true or false that's means network call is happened background or not */
      //staleTime: 30000,
      /** network call is happended or not while on mount */
      //refetchOnMount: true
      /** network call is happended or not while on windows focus */
      //refetchOnWindowFocus: true
      /** polling data in spefice time interval */
      refetchInterval: 2000,
      refetchIntervalInBackground: true,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
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
