import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <ul className="header-left">
          <li className="header-left__link">
            <NavLink to="/top-news">Top News</NavLink>
          </li>
          <li className="header-left__link">
            <NavLink to="/categories">Categories</NavLink>
          </li>

          <li className="header-left__link">
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>

        <ul className="header-right">
          <li className="header-right__link">
            <NavLink to="/top-news">GB</NavLink>
          </li>
          <li className="header-right__link">
            <NavLink to="/top-news">US</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
