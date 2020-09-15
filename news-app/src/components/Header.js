import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux';
import { linksStateChangeAction } from '../store/actions/actionCreators';
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
    name: 'UK',
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
      false,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isDisabled !== this.props.isDisabled) {
      this.setState({
        linkClassName: `header-right__link${
          this.props.isDisabled.linksState ? '--disabled' : ''
        }`,
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

  drawRightLinks = (arr) => {
    const countryLinks = arr.map((el) => {
      return (
        <li key={el._id} className={this.state.linkClassName}>
          {/* if isDisabled=FALSE the links are NOT DISABLED; the initial state is FALSE */}
          <NavLink to={el.path}>{el.name}</NavLink>
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
    isDisabled: state.linksState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    linksStateChange: () => {
      dispatch(linksStateChangeAction(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
