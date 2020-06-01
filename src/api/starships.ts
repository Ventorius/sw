import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';
const URL = `${BASE_URL}/starships`;

interface StarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

type StarshipResponse = Starship;

const getAllStarships = async (page = 1): Promise<StarshipsResponse> => {
  const { data } = await axios.get<StarshipsResponse>(`${URL}/?page=${page}`);
  return data;
};

//Default id is 2 because no 1 is empty result
const getSingleStarship = async (id = 2): Promise<StarshipResponse> => {
  const { data } = await axios.get(`${URL}/${id}`);
  return data;
};

const searchForStarship = async (searchPhrase: string): Promise<StarshipsResponse> => {
  const { data } = await axios.get<StarshipsResponse>(`${URL}/?search=${searchPhrase}`);

  return data;
};

export { getAllStarships, getSingleStarship, searchForStarship };
