import React from 'react';
import { Link } from 'react-router-dom';
import { useSuperHeroes } from '../../hooks/useSuperHeroes';

function RQSuperHeroes() {
  const onSuccess = () => {
    console.log('Perform side effect after fetching data');
  };

  const onError = () => {
    console.log('Perform side effect after encountering error');
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroes(
    onSuccess,
    onError
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
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })} */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default RQSuperHeroes;
