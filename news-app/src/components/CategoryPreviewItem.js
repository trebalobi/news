import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { linksStateChangeAction } from '../redux/actions/actionCreators';
import { connect } from 'react-redux';
import './Categories.scss';

class CategoryPreviewItem extends Component {
  handleClick = () => {
    this.props.linksStateChange();
  };
  render() {
    return (
      <NavLink to={'/news'} onClick={this.handleClick} className="category-preview-item">
        <div>Title</div>
        <img
          className="category-preview-item__img"
          src={
            //this.props.url
            'https://image.cnbcfm.com/api/v1/image/106646833-15965415672020-08-03t101755z_1794012163_rc2a6i9yj9yc_rtrmadp_0_usa-tiktok.jpeg?v=1596542482'
          }
          alt="placeholder"
        ></img>
        <div>Description</div>
      </NavLink>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    linksStateChange: () => {
      dispatch(linksStateChangeAction(true));
    },
  };
};

export default connect(null, mapDispatchToProps)(CategoryPreviewItem);
