import React, { Component } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import CategoryCarousel from './CategoryCarousel';
import { NavLink } from 'react-router-dom';
import { setCurrentCategoryAction } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import '../styles/Categories.scss';

class CategoryPreview extends Component {
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
  setCurrentCategory = () => {
    this.props.setCategory(this.props.category);
    console.log('kliknut link');
  };
  render() {
    const classNames = `category-preview__content ${
      this.state.isExpanded ? '' : 'category-preview__content--hidden'
    }`;
    return (
      <div className="category-preview">
        <div className="category-preview__title">
          <NavLink
            onClick={this.setCurrentCategory}
            to={`/${this.props.title.toLowerCase()}`}
          >
            <h3>{this.props.title}</h3>
          </NavLink>
          <div onClick={this.handleClickExpand}>
            <IconContext.Provider value={{ className: 'expand-icon' }}>
              {this.state.isExpanded ? <MdExpandMore /> : <MdExpandLess />}
            </IconContext.Provider>
          </div>
        </div>
        <div className={classNames}>
          <CategoryCarousel articles={this.props.articlesObj.articles} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (category) => {
      dispatch(setCurrentCategoryAction(category));
    },
  };
};

export default connect(null, mapDispatchToProps)(CategoryPreview);
