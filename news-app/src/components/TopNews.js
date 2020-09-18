import React, { Component } from 'react';
import NewsPreviewItem from './NewsPreviewItem';
import {
  getTopNewsAction,
  initReadyChangeTNAction,
} from '../redux/actions/actionCreators';
import { connect } from 'react-redux';

class TopNews extends Component {
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.country !== this.props.country) {
  //     this.props.getTopNews(this.props.country);
  //   }
  // }

  componentWillUnmount() {
    this.props.setInitReady(false);
    console.log(this.props.initReady, 'top news will unmount');
  }

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
    console.log(this.props.initReady, 'top news');
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

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
