import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  linksStateChangeAction,
  viewNewsItemAction,
} from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import '../styles/Categories.scss';

class CategoryPreviewItem extends Component {
  handleClick = () => {
    const item = {
      title: this.props.title,
      image: this.props.imageUrl,
      content: this.props.content,
    };
    this.props.viewNewsItem(item);
    this.props.linksStateChange(true);
  };
  render() {
    return (
      <NavLink to={'/news'} onClick={this.handleClick} className="category-preview-item">
        <h3>{this.props.title}</h3>
        <img
          className="category-preview-item__img"
          src={this.props.imageUrl}
          alt="placeholder"
        ></img>
        <div className="category-preview-item__content">{this.props.description}</div>
      </NavLink>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewNewsItem: (item) => {
      dispatch(viewNewsItemAction(item));
    },
    linksStateChange: (isActive) => {
      dispatch(linksStateChangeAction(isActive));
    },
  };
};

export default connect(null, mapDispatchToProps)(CategoryPreviewItem);
