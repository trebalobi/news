import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { linksStateChangeAction } from '../redux/actions/actionCreators';
import './News.scss';

class NewsPreview extends Component {
  handleClick = () => {
    this.props.linksStateChange();
  };
  render() {
    return (
      <div className="news-preview">
        <h3>{this.props.title}</h3>
        <img
          className="news-preview__img"
          src={this.props.imageURL}
          alt="placeholder"
        ></img>
        <div>{this.props.description}</div>
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
    linksStateChange: () => {
      dispatch(linksStateChangeAction(true));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewsPreview);
