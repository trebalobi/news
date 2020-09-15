import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import TopNews from './components/TopNews';
import Categories from './components/Categories';
import Search from './components/Search';
import NewsPreview from './components/NewsPreview'; //ovo je za sada

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route exact path={['/', '/top-news']} component={TopNews}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/news" component={NewsPreview}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
