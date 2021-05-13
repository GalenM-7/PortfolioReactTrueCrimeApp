import React, { Component } from "react";
import { Row, Container, Media, Col } from "reactstrap";
import { TIMEPERIODS } from "../shared/timeperiods";
import BillyKidBanner95New from "../images/BillyKidBanner95New.png";


class WildWestHomeSection extends Component {
    constructor(props){
        super(props);
        this.state = {
          isOpenWildWest: false,
        };
    }

    renderWildWest(isOpenWildWest) {
    if (isOpenWildWest) {
      return (
        <div>
          <img
            src={this.props.timeperiods[0].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About The American West</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[0].significance}
            </p>
          </div>
          <p className="westTimePeriodHeading">
            <b>Information About The American West</b>
          </p>
          <p className="TimePeriodText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sun
          </p>
          <p className="westTimePeriodHeading">
            <b>Information About The American West</b>
          </p>
          <p className="TimePeriodText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sun.
          </p>
          <div>{this.buttonWildWest(this.state.isOpenWildWest)}</div>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={this.props.timeperiods[0].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About The American West</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[0].significance}
            </p>
            <div>{this.buttonWildWest(this.state.isOpenWildWest)}</div>
          </div>
        </div>
      );
    }
  }

  clickWildWest(isOpenWildWest) {
    if (!isOpenWildWest) {
      this.setState({ isOpenWildWest: true });
    } else {
      this.setState({ isOpenWildWest: false });
    }
  }

  buttonWildWest(isOpenWildWest) {
    if (!isOpenWildWest) {
      return (
        <button
          className="buttonFigureWest"
          onClick={() => this.clickWildWest(this.state.isOpenWildWest)}
        >
          <b>Click Here To Read More</b>
        </button>
      );
    } else {
      return (
        <button
          className="buttonFigureWestSM"
          onClick={() => this.clickWildWest(this.state.isOpenWildWest)}
        >
          <b>Click Here To Collapse Section</b>
        </button>
      );
    }
  }

    render () {
        return (
          <div>
            {this.renderWildWest(this.state.isOpenWildWest)}
          </div>
        );
    }
    
}

export default WildWestHomeSection