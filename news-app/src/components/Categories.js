import React, { Component } from 'react';
import CategoryPreview from './CategoryPreview';

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <h3>Top 5 news by categories from GB/US{/*this.props.country*/}</h3>
        <div>
          <CategoryPreview title="Entertainment" />
          <CategoryPreview title="General" />
          <CategoryPreview title="Health" />
          <CategoryPreview title="Science" />
          <CategoryPreview title="Sport" />
          <CategoryPreview title="Technology" />
        </div>
      </div>
    );
  }
}
