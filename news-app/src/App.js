import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import TopNews from './components/TopNews';
import Categories from './components/Categories';
import Search from './components/Search';
import News from './components/News'; //ovo je za sada
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route exact path="/">
          <Redirect to="/top-news"></Redirect>
        </Route>

        <Route exact path="/top-news" component={TopNews}></Route>
        <Route exact path="/categories" component={Categories}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route
          exact
          path={[
            '/entertainment',
            '/general',
            '/health',
            '/science',
            '/sport',
            '/technology',
          ]}
          component={CategoryPage}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
