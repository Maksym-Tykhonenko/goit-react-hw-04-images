//const BASE_URL = 'https://pixabay.com/api/';  
//const API_KEY = '29676821-2dfd501c3768e552959bc01fb';
//const PER_PAGE = 12;
//const searchOption = 'image_type=photo&orientation=horizontal';
//
//export const getImgs = (query, page) => {
//  return fetch(
//    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${searchOption}&per_page=${PER_PAGE}`)
//    .then(response => response.json())
//};

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/'; 
const API_KEY = '29676821-2dfd501c3768e552959bc01fb';
const PER_PAGE = 12;
const searchOption = 'image_type=photo&orientation=horizontal';

export const getImgs = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&${searchOption}&per_page=${PER_PAGE}`
  );
  return response.data;
};
