import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryPreview from '../components/CategoryPreview';
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

class CategoriesPage extends Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      this.props.getCategories(this.props.country, categories);
      return;
    }
    this.props.setInitReady(true);
  }
  componentWillUnmount() {
    this.props.setInitReady(false);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  drawCategoryPreviews = () => {
    const prevArr = this.props.categories;

    const categoriesPrev = prevArr.map((el, index) => {
      return (
        <CategoryPreview
          key={index}
          articlesObj={el}
          title={this.capitalizeFirstLetter(categories[index])}
          category={categories[index]}
        />
      );
    });
    return categoriesPrev;
  };

  render() {
    return (
      <div className="categories-page">
        {this.props.initReady ? (
          <div className="categories-page__container">
            <h1>Top 5 news by categories from {this.props.country.toUpperCase()}</h1>

            {this.drawCategoryPreviews()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
