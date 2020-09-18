import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux';
import {
  linksStateChangeAction,
  countryChangeAction,
  getTopNewsAction,
  getCategoriesAction,
  getDataOnCountryChangeAction,
} from '../redux/actions/actionCreators';
import { categories } from './Categories';
import './Header.scss';

const leftLinks = [
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

const rightLinks = [
  {
    _id: 1,
    path: '/top-news',
    name: 'GB',
  },
  {
    _id: 2,
    path: '/top-news',
    name: 'US',
  },
];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: window.innerWidth < 1000,
      linkClassName: 'header-right__link',
    };
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isMobile: window.innerWidth < 1000,
        });
      },
      false
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.linksState !== this.props.linksState) {
      this.setState({
        linkClassName: `header-right__link${this.props.linksState ? '--disabled' : ''}`,
      });
    }
  }

  // calls function to change state of right links
  handleClick = () => {
    this.props.linksStateChange();
  };

  drawLeftLinks = (arr) => {
    const navLinks = arr.map((el) => {
      return (
        <li
          key={el._id}
          className={!this.state.isMobile ? 'header-left__link' : 'burger-content__link'}
        >
          <NavLink onClick={this.handleClick} to={el.path}>
            {el.name}
          </NavLink>
        </li>
      );
    });
    return (
      <ul className={!this.state.isMobile ? 'header-left' : 'burger-content'}>
        {navLinks}
      </ul>
    );
  };

  countryChangeClick = (country) => {
    this.props.getDataOnCountryChange(country, categories);
  };

  drawRightLinks = (arr) => {
    const countryLinks = arr.map((el) => {
      return (
        <li key={el._id} className={this.state.linkClassName}>
          {/* if isDisabled=FALSE the links are NOT DISABLED; the initial state is FALSE */}
          <a onClick={() => this.countryChangeClick(el.name)}>{el.name}</a>
        </li>
      );
    });
    return <ul className="header-right">{countryLinks}</ul>;
  };

  render() {
    return (
      <header className="header">
        {this.state.isMobile ? (
          <div className="burger">
            <div className="burger-icon-container">
              <IconContext.Provider value={{ className: 'burger-icon' }}>
                <MdMenu />
              </IconContext.Provider>
            </div>
            {this.drawLeftLinks(leftLinks)}
          </div>
        ) : (
          this.drawLeftLinks(leftLinks)
        )}

        {this.drawRightLinks(rightLinks)}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    linksState: state.linksState,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    linksStateChange: () => {
      dispatch(linksStateChangeAction(false));
    },
    countryChange: (country) => {
      dispatch(countryChangeAction(country));
    },
    getTopNews: (country) => {
      dispatch(getTopNewsAction(country));
    },
    getCategories: (country, categories) => {
      dispatch(getCategoriesAction(country, categories));
    },
    getDataOnCountryChange: (country, categories) => {
      dispatch(getDataOnCountryChangeAction(country, categories));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
