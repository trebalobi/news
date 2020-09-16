import { API_KEY } from './api-key';

// export function getTopNewsUs(country) {
//   return fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
//   ).then((res) => res.json());
// }

export function getTopNews(country) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
  ).then((res) => res.json());
}
