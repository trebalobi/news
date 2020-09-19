import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeadlinePage extends Component {
  render() {
    return (
      <div className="news">
        <h1>{this.props.item.title}</h1>
        <img
          className="news__img"
          src={this.props.item.image}
          alt={'image_placeholder'}
        ></img>
        <div>{this.props.item.content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.newsItem,
  };
};

export default connect(mapStateToProps)(HeadlinePage);
