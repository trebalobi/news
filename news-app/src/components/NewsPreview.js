import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './News.scss';

export default class NewsPreview extends Component {
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
          <NavLink to={`/news`}>More {'>'}</NavLink>
        </div>
      </div>
    );
  }
}
