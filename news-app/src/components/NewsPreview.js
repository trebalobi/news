import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './News.scss';

class NewsPreview extends Component {
  handleClick = () => {
    this.props.linksStateChange();
  };
  render() {
    return (
      <div className="news-preview">
        <div>Title</div>
        <img
          className="news-preview__img"
          src={
            //this.props.url
            'https://image.cnbcfm.com/api/v1/image/106646833-15965415672020-08-03t101755z_1794012163_rc2a6i9yj9yc_rtrmadp_0_usa-tiktok.jpeg?v=1596542482'
          }
          alt="image-placeholder"
        ></img>
        <div>Description</div>
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
      dispatch({ type: 'LINKS_STATE_CHANGE', disable: true });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewsPreview);
