import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54244946-6cd806218e75715379c78dc38';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
