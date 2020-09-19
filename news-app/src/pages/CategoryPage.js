import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCategoryAction,
  initReadyChangeCategoryAction,
} from '../redux/actions/actionCreators';
import NewsPreviewItem from '../components/NewsPreviewItem';

class CategoryPage extends Component {
  componentDidMount() {
    this.props.getCategory(this.props.country, this.props.currentCategory);
  }
  drawNewsPreviewItems = () => {
    const newsArr = this.props.category.articles;
    console.log(newsArr, 'OVDEEE');
    const newsPrev = newsArr.map((el, i) => {
      return (
        <NewsPreviewItem
          key={i}
          title={el.title}
          imageURL={el.urlToImage}
          description={el.description}
          content={el.content}
        ></NewsPreviewItem>
      );
    });
    return newsPrev;
  };
  render() {
    return (
      <div>
        {this.props.initReady ? this.drawNewsPreviewItems() : <div>loading...</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initReady: state.initReadyCategoryPage,
    country: state.country,
    categories: state.categories,
    currentCategory: state.currentCategory,
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (country, categories) => {
      dispatch(getCategoryAction(country, categories));
    },
    setInitReady: (isReady) => {
      dispatch(initReadyChangeCategoryAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
