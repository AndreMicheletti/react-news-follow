
const BASE_URL = 'https://newsapi.org/v2/';
const KEY = 'd614f6e1a4824b739c33fb9f7e4f06b1';

const API = {
  getByCategory: async (categoryName) => {
    let result = await fetch(`${BASE_URL}everything?category=${categoryName}&apiKey=${KEY}`);
    return await result.json();
  },
  getByQuery: async (categoryName) => {
    let result = await fetch(`${BASE_URL}everything?q=${categoryName}&apiKey=${KEY}`).json();
    return await result.json();
  },
  getLatest: async () => {
    let result = await fetch(`${BASE_URL}top-headlines?country=us&apiKey=${KEY}`);
    return await result.json();
  },
};

export default API;