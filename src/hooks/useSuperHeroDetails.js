import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperDetails = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroDetails = (heroId) => {
  return useQuery(['super-hero', heroId], () => fetchSuperDetails(heroId));
};
