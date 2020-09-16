import React, { Component } from 'react';
import CategoryPreviewItem from './CategoryPreviewItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import './Categories.scss';

export default class CategoryCarousel extends Component {
  constructor() {
    super();
    this.state = {
      translateAmount: 0,
    };
  }
  handleClickSwitchLeft = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount >= 0 ? 0 : this.state.translateAmount + 35, //fix this and make it responsive
    });
  };

  handleClickSwitchRight = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount <= -70 ? -70 : this.state.translateAmount - 35,
    });
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
            <CategoryPreviewItem />
            <CategoryPreviewItem />
            <CategoryPreviewItem />
            <CategoryPreviewItem />
            <CategoryPreviewItem />
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
