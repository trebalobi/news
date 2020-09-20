import React, { Component } from 'react';
import NewsPreviewItem from '../components/NewsPreviewItem';
import {
  getTopNewsAction,
  initReadyChangeTNAction,
} from '../redux/actions/actionCreators';
import { connect } from 'react-redux';

class TopNewsPage extends Component {
  constructor() {
    super();
    this.state = {
      initial: true,
    };
  }
  componentDidMount() {
    if (this.props.topNews.length === 0) {
      this.props.getTopNews(this.props.country);
      return;
    }
    this.props.setInitReady(true);
  } //here is where i dispatch the first action to fill up news

  drawNewsPreviewItems = () => {
    const topNewsArr = this.props.topNews;
    const newsPrev = topNewsArr.map((el, i) => {
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
      <div className="top-news">
        {this.props.initReady ? this.drawNewsPreviewItems() : <div>loading...</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topNews: state.topNews,
    initReady: state.initReadyTN,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopNews: (country) => {
      dispatch(getTopNewsAction(country));
    },
    setInitReady: (isReady) => {
      dispatch(initReadyChangeTNAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNewsPage);
