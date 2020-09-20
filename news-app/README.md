# News

News is an application for viewing the latest news from GB and US.

## Installation

```bash
npm install
npm start
```

## Libraries

Project created with:

- React.js
- React-redux
- React-router
- Redux-saga
- React-icons

## API

Data gathered from:
https://newsapi.org/

## Notice

News API allows only 250 requests per 12h, or 500 requests per 24h.
If you exceed that number switch to other key located in src/api/api-key.js and add it to fetch calls in src/api/services.js
