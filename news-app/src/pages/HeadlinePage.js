import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Headline.scss';

class HeadlinePage extends Component {
  render() {
    return (
      <div className="headline">
        <h1>{this.props.item.title}</h1>
        <img
          className="headline__img"
          src={this.props.item.image}
          alt={'image_placeholder'}
        ></img>
        <div className="headline__content">{this.props.item.content}</div>
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
