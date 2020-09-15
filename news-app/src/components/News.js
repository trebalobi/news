import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <h1>Title</h1>
        <img
          className="news__img"
          src={
            'https://image.cnbcfm.com/api/v1/image/106646833-15965415672020-08-03t101755z_1794012163_rc2a6i9yj9yc_rtrmadp_0_usa-tiktok.jpeg?v=1596542482'
          }
          alt={'image_placeholder'}
        ></img>
        <div>Content</div>
      </div>
    );
  }
}
