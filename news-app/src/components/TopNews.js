import React, { Component } from 'react';
import NewsPreview from './NewsPreview';

export default class TopNews extends Component {
  render() {
    return (
      <div className="top-news">
        <NewsPreview id={1}></NewsPreview>
        <NewsPreview id={2}></NewsPreview>
        <NewsPreview id={3}></NewsPreview>
        <NewsPreview id={4}></NewsPreview>
      </div>
    );
  }
}
