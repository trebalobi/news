import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  linksStateChangeAction,
  viewNewsItemAction,
} from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import './Categories.scss';

class CategoryPreviewItem extends Component {
  handleClick = () => {
    const item = {
      title: this.props.title,
      image: this.props.imgUrl,
      content: this.props.content,
    };
    console.log(item);
    this.props.viewNewsItem(item);
    this.props.linksStateChange(true);
  };
  render() {
    return (
      <NavLink to={'/news'} onClick={this.handleClick} className="category-preview-item">
        <div>{this.props.title}</div>
        <img
          className="category-preview-item__img"
          src={this.props.imgUrl}
          alt="placeholder"
        ></img>
        <div>{this.props.description}</div>
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
