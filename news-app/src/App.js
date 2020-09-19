import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import TopNewsPage from './pages/TopNewsPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import HeadlinePage from './pages/HeadlinePage'; //ovo je za sada
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Route exact path="/">
          <Redirect to="/top-news"></Redirect>
        </Route>

        <Route exact path="/top-news" component={TopNewsPage}></Route>
        <Route exact path="/categories" component={CategoriesPage}></Route>
        <Route exact path="/search" component={SearchPage}></Route>
        <Route exact path="/news" component={HeadlinePage}></Route>
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
