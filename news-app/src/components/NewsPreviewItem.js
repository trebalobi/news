import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  linksStateChangeAction,
  viewNewsItemAction,
} from '../redux/actions/actionCreators';
import '../styles/News.scss';

class NewsPreviewItem extends Component {
  handleClick = () => {
    const item = {
      title: this.props.title,
      image: this.props.imageURL,
      content: this.props.content,
    };
    this.props.viewNewsItem(item);
    this.props.linksStateChange();
  };
  render() {
    return (
      <div className="news-preview">
        <div className="news-preview__title">
          <h3>{this.props.title}</h3>
          <img
            className="news-preview__img"
            src={this.props.imageURL}
            alt="placeholder"
          ></img>

          <div className="news-preview__description">{this.props.description}</div>
        </div>
        <div className="news-preview__more">
          <NavLink onClick={this.handleClick} to={`/news`}>
            More {'>'}
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewNewsItem: (item) => {
      dispatch(viewNewsItemAction(item));
    },
    linksStateChange: () => {
      dispatch(linksStateChangeAction(true));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewsPreviewItem);
