import React, { Component } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import CategoryCarousel from './CategoryCarousel';
import './Categories.scss';
import { NavLink } from 'react-router-dom';

export default class CategoryPreview extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: true,
      translateAmount: 0,
    };
  }

  handleClickExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const classNames = `category-preview__content ${
      this.state.isExpanded ? '' : 'category-preview__content--hidden'
    }`;
    return (
      <div className="category-preview">
        <div className="category-preview__title">
          <NavLink to={`/${this.props.title.toLowerCase()}`}>
            <h3>{this.props.title}</h3>
          </NavLink>
          <div onClick={this.handleClickExpand}>
            <IconContext.Provider value={{ className: 'expand-icon' }}>
              {this.state.isExpanded ? <MdExpandMore /> : <MdExpandLess />}
            </IconContext.Provider>
          </div>
        </div>
        <div className={classNames}>
          <CategoryCarousel a={this.props.as.articles} />
        </div>
      </div>
    );
  }
}
