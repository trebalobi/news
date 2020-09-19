import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryPreview from './CategoryPreview';
import {
  getCategoriesAction,
  initReadyChangeCategoriesAction,
} from '../redux/actions/actionCreators';

export const categories = [
  'entertainment',
  'general',
  'health',
  'science',
  'sport',
  'technology',
];

class Categories extends Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      this.props.getCategories(this.props.country, categories);
      return;
    }
    this.props.setInitReady(true);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.country !== this.props.country) {
  //     this.props.getCategories(this.props.country, categories);
  //   }
  // }
  // componentWillUnmount() {
  //   this.props.setInitReady(false);
  //   console.log(this.props.initReady, 'categories will unmount');
  // }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const articles = this.props.categories;
    console.log(this.props.initReady, 'categories render');

    return (
      <div className="categories">
        {this.props.initReady ? (
          <div>
            <h3>Top 5 news by categories from {this.props.country.toUpperCase()}</h3>
            <div>
              <CategoryPreview
                as={articles[0]}
                title="Entertainment"
                category={categories[0]}
              />
              <CategoryPreview
                as={articles[1]}
                title="General"
                category={categories[1]}
              />
              <CategoryPreview as={articles[2]} title="Health" category={categories[2]} />
              <CategoryPreview
                as={articles[3]}
                title="Science"
                category={categories[3]}
              />
              <CategoryPreview as={articles[4]} title="Sport" category={categories[4]} />
              <CategoryPreview
                as={articles[5]}
                title="Technology"
                category={categories[5]}
              />
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
    initReady: state.initReadyCategories,
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
      dispatch(initReadyChangeCategoriesAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
