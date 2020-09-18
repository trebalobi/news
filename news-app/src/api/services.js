import { API_KEY, API_KEY2 } from './api-key';

// export function getTopNewsUs(country) {
//   return fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
//   ).then((res) => res.json());
// }

export function getTopNews(country) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY2}`
  ).then((res) => res.json());
}

export function getCategoryPreview(country, category) {
  //this is just the 5 news for categories
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=5&apiKey=${API_KEY2}`
  ).then((res) => res.json());
}

export function getCategory(country, category) {
  //this is for the whole category
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY2}`
  ).then((res) => res.json());
}
