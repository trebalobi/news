import React, { Component } from 'react';
import NewsPreviewItem from './NewsPreviewItem';
import { getTopNewsAction, initReadyChangeAction } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';

class TopNews extends Component {
  constructor() {
    super();
    this.state = {
      initial: true,
    };
  }
  componentDidMount() {
    this.props.getTopNews(this.props.country);
  } //here is where i dispatch the first action to fill up news

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.country !== this.props.country) {
      this.props.getTopNews(this.props.country);
    }
  }

  componentWillUnmount() {
    this.props.setInitReady(false);
  }

  drawNewsPreviewItems = () => {
    const topNewsArr = this.props.topNews;
    console.log(topNewsArr);
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
    initReady: state.initReady,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopNews: (country) => {
      dispatch(getTopNewsAction(country));
    },
    setInitReady: (isReady) => {
      dispatch(initReadyChangeAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNews);
