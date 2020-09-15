import React, { Component } from 'react';
import {
  MdExpandMore,
  MdExpandLess,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import CategoryPreviewItem from './CategoryPreviewItem';
import './Categories.scss';

export default class CategoryPreview extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      translateAmount: 0,
    };
  }

  handleClickExpand = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
    console.log(this.state.isExpanded);
  };

  handleClickSwitchLeft = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount <= -70 ? -70 : this.state.translateAmount - 35,
    });
  };

  handleClickSwitchRight = () => {
    this.setState({
      translateAmount:
        this.state.translateAmount >= 0 ? 0 : this.state.translateAmount + 35,
    });
  };

  render() {
    const inlineStyle = {
      transform: `translateX(${this.state.translateAmount}%)`,
      transition: `transform 1s`,
    };

    const classNames = `category-preview__content ${
      this.state.isExpanded
        ? 'category-preview__content--visible'
        : 'category-preview__content--hidden'
    }`;

    return (
      <div className="category-preview">
        <div className="category-preview__title">
          <h3>{this.props.title}</h3>
          <div onClick={this.handleClickExpand}>
            <IconContext.Provider value={{ className: 'expand-icon' }}>
              {this.state.isExpanded ? <MdExpandLess /> : <MdExpandMore />}
            </IconContext.Provider>
          </div>
        </div>
        <div className={classNames}>
          <div
            className={'switch-icon-container switch-icon-container__left'}
            onMouseDown={this.handleClickSwitchLeft}
          >
            <IconContext.Provider value={{ className: 'switch-icon switch-icon__left' }}>
              <MdChevronLeft />
            </IconContext.Provider>
          </div>
          <div className={`category-preview__container`}>
            <div className={`category-preview__innercontainer`} style={inlineStyle}>
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
      </div>
    );
  }
}
