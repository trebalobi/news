import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryPreview from './CategoryPreview';
import {
  getCategoriesAction,
  initReadyChangeAction,
} from '../redux/actions/actionCreators';

const categories = [
  'entertainment',
  'general',
  'health',
  'science',
  'sport',
  'technology',
];

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories(this.props.country, categories);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.country !== this.props.country) {
      this.props.getCategories(this.props.country, categories);
    }
  }
  componentWillUnmount() {
    this.props.setInitReady(false);
  }
  render() {
    const articles = this.props.categories;
    return (
      <div className="categories">
        {this.props.initReady ? (
          <div>
            <h3>Top 5 news by categories from GB/US{/*this.props.country*/}</h3>
            <div>
              <CategoryPreview as={articles[0]} title="Entertainment" />
              <CategoryPreview as={articles[1]} title="General" />
              <CategoryPreview as={articles[2]} title="Health" />
              <CategoryPreview as={articles[3]} title="Science" />
              <CategoryPreview as={articles[4]} title="Sport" />
              <CategoryPreview as={articles[5]} title="Technology" />
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initReady: state.initReady,
    country: state.country,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (country, categories) => {
      dispatch(getCategoriesAction(country, categories));
    },
    setInitReady: (isReady) => {
      dispatch(initReadyChangeAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
