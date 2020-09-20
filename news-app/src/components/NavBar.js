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
import { categories } from '../pages/CategoriesPage';
import '../styles/NavBar.scss';

const leftLinks = [
  {
    path: '/top-news',
    name: 'Top News',
  },
  {
    path: '/categories',
    name: 'Categories',
  },
  {
    path: '/search',
    name: 'Search',
  },
];

const rightLinks = [
  {
    path: '/top-news',
    name: 'GB',
  },
  {
    path: '/top-news',
    name: 'US',
  },
];

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: window.innerWidth < 700,
      linkClassName: 'header-right__link',
      menuOpen: false,
      activeButton: 'GB',
    };
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isMobile: window.innerWidth < 700,
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

  handleClick = () => {
    this.props.linksStateChange();
    this.burgerMenuOpen();
  };

  drawLeftLinks = (arr) => {
    const navLinks = arr.map((el, index) => {
      return (
        <li
          key={index}
          className={!this.state.isMobile ? 'header-left__link' : 'burger-content__link'}
        >
          <NavLink
            activeStyle={{ backgroundColor: '#bc4123' }}
            onClick={this.handleClick}
            to={el.path}
          >
            {el.name}
          </NavLink>
        </li>
      );
    });
    return (
      <ul
        className={
          !this.state.isMobile
            ? 'header-left'
            : this.state.menuOpen
            ? 'burger-content'
            : 'burger-content--visible'
        }
      >
        {navLinks}
      </ul>
    );
  };

  countryChangeClick = (country, currentCategory) => {
    this.props.getDataOnCountryChange(country, categories, currentCategory);
    this.setState({ activeButton: country });
  };

  drawRightLinks = (arr) => {
    const countryLinks = arr.map((el, index) => {
      return (
        <li key={index} className={this.state.linkClassName}>
          {/* if isDisabled=FALSE the links are NOT DISABLED; the initial state is FALSE */}
          <button
            type="button"
            onClick={() => this.countryChangeClick(el.name, this.props.currentCategory)}
            className={
              el.name === this.state.activeButton ? 'button button--active' : 'button'
            }
          >
            {el.name}
          </button>
        </li>
      );
    });
    return <ul className="header-right">{countryLinks}</ul>;
  };

  burgerMenuOpen = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    return (
      <header className="header">
        {this.state.isMobile ? (
          <div className="burger">
            <div className="burger-icon-container" onClick={this.burgerMenuOpen}>
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
    currentCategory: state.currentCategory,
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
    getDataOnCountryChange: (country, categories, category) => {
      dispatch(getDataOnCountryChangeAction(country, categories, category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
