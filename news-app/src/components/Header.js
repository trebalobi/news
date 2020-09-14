import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { MdMenu } from 'react-icons/md';
import './Header.scss';

const links = [
  {
    _id: 1,
    path: '/top-news',
    name: 'Top News',
  },
  {
    _id: 2,
    path: '/categories',
    name: 'Categories',
  },
  {
    _id: 3,
    path: '/search',
    name: 'Search',
  },
];

export default class Header extends Component {
  constructor() {
    super();
    this.state = { isMobile: false };
  }
  componentDidMount() {
    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isMobile: window.innerWidth < 700,
        });
      },
      false,
    );
  }

  drawLeftLinks = (arr) => {
    const navLinks = arr.map((el) => {
      return (
        <li
          key={el._id}
          className={
            !this.state.isMobile
              ? 'header-left__link'
              : 'burger-content__link'
          }
        >
          <NavLink to={el.path}>{el.name}</NavLink>
        </li>
      );
    });
    return (
      <ul
        className={
          !this.state.isMobile ? 'header-left' : 'burger-content'
        }
      >
        {navLinks}
      </ul>
    );
  };
  //add burger menu
  render() {
    return (
      <header className="header">
        {this.state.isMobile ? (
          <IconContext.Provider value={{ className: 'burger-icon' }}>
            <div className="burger">
              <div className="burger-icon-container">
                <MdMenu />
              </div>

              {this.drawLeftLinks(links)}
            </div>
          </IconContext.Provider>
        ) : (
          this.drawLeftLinks(links)
        )}

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
