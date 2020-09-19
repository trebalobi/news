import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsPreviewItem from './NewsPreviewItem';
import {
  getTopNewsAction,
  initReadyChangeSearchAction,
} from '../redux/actions/actionCreators';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      arrayToFilter: [],
    };
  }
  componentDidMount() {
    if (this.props.topNews.length === 0) {
      this.props.getTopNews(this.props.country);
      return;
    }
    this.props.setInitReady(true);
  }

  newsFilterOnChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  drawNewsPreviewItems = (newsArr) => {
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
    return <div>{newsPrev}</div>;
  };
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      const inputValue = e.target.value;
      alert(inputValue);
    }
  };
  render() {
    const newsToFilter = Object.values(this.props.topNews);
    const filteredNews = newsToFilter.filter((news) => {
      return news.title.toLowerCase().includes(this.state.inputValue.toLowerCase());
    });
    const country =
      this.props.country.toLowerCase() === 'gb' ? 'Great Britain' : 'United States';
    return (
      <div>
        <h1>Search top news from {country}</h1>
        <div>
          <input
            type="text"
            placeholder="Search term..."
            className="search"
            onKeyUp={this.handleEnter}
            onChange={this.newsFilterOnChange}
          />{' '}
        </div>
        {this.props.initReady ? (
          this.drawNewsPreviewItems(filteredNews)
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initReady: state.initReadySearch,
    country: state.country,
    topNews: state.topNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopNews: (country) => {
      dispatch(getTopNewsAction(country));
    },
    setInitReady: (isReady) => {
      dispatch(initReadyChangeSearchAction(isReady));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
