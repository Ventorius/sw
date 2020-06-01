import axios from 'axios';

const getAllStarships = async (): Promise<Starship[]> => {
  const { data } = await axios.get('https://swapi.dev/api/starships');
  console.log(data);
  return data;
};

export { getAllStarships };
