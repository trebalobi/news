import React, { Component } from 'react';
import CategoryPreviewItem from './CategoryPreviewItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import '../styles/Categories.scss';

export default class CategoryCarousel extends Component {
  constructor() {
    super();
    this.state = {
      translateAmount: 0,
      translateAmountPlus: 0,
      translateAmountMax: 0,
    };
  }
  componentDidMount() {
    const initialState = this.getWidthState();
    this.setState({
      translateAmountPlus: initialState.width,
      translateAmountMax: initialState.max,
    });
    window.addEventListener(
      'resize',
      () => {
        const resizeState = this.getWidthState();
        this.setState({
          translateAmount: 0,
          translateAmountPlus: resizeState.width,
          translateAmountMax: resizeState.max,
        });
      },
      false
    );
  }

  getWidthState = () => {
    let initialWidth;
    let initialMax;
    if (window.innerWidth < 568) {
      initialWidth = 100;
      initialMax = 400;
    } else if (window.innerWidth < 768) {
      initialWidth = 50;
      initialMax = 3 * initialWidth;
    } else if (window.innerWidth < 1200) {
      initialWidth = 50;
      initialMax = 3 * initialWidth;
    } else {
      initialWidth = 33.33;
      initialMax = 2 * initialWidth;
    }
    return { width: initialWidth, max: initialMax };
  };

  handleClickSwitchLeft = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount >= 0
          ? 0
          : this.state.translateAmount + this.state.translateAmountPlus,
    });
  };

  handleClickSwitchRight = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount <= -this.state.translateAmountMax
          ? 0
          : this.state.translateAmount - this.state.translateAmountPlus,
    });
  };

  drawCategoryPreviewItems = () => {
    const articlesArr = this.props.articles;
    const articlesPrev = articlesArr.map((el, index) => {
      return (
        <CategoryPreviewItem
          key={index}
          title={el.title}
          imageUrl={el.urlToImage}
          description={el.description}
          content={el.content}
        />
      );
    });
    return articlesPrev;
  };
  render() {
    const inlineStyle = {
      transform: `translateX(${this.state.translateAmount}%)`,
      transition: `transform 1s`,
    };

    return (
      <div className="category-carousel">
        <div
          className={'switch-icon-container switch-icon-container__left'}
          onMouseDown={this.handleClickSwitchLeft}
        >
          <IconContext.Provider value={{ className: 'switch-icon switch-icon__left' }}>
            <MdChevronLeft />
          </IconContext.Provider>
        </div>
        <div className={`category-carousel__outerContainer`}>
          <div className={`category-carousel__innerContainer`} style={inlineStyle}>
            {this.drawCategoryPreviewItems()}
          </div>
        </div>
        <div
          className={'switch-icon-container switch-icon-container__right'}
          onClick={this.handleClickSwitchRight}
        >
          <IconContext.Provider value={{ className: 'switch-icon switch-icon__right' }}>
            <MdChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}
