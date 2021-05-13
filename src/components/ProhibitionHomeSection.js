import React, { Component } from 'react';
import { Row, Container, Media, Col } from "reactstrap";

class ProhibitionHomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenProhibition: false,
    };
  }

  renderProhibition(isOpenProhibition) {
    if (isOpenProhibition) {
      return (
        <div>
          <img
            src={this.props.timeperiods[1].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About Prohibition</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[0].significance}
            </p>
          </div>
          <p className="westTimePeriodHeading">
            <b>Subhead1</b>
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
            <b>Subhead2</b>
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
          <div>{this.buttonProhibition(this.state.isOpenProhibition)}</div>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={this.props.timeperiods[1].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About Prohibition</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[0].significance}
            </p>
            <div>{this.buttonProhibition(this.state.isOpenProhibition)}</div>
          </div>
        </div>
      );
    }
  }

  clickProhibition(isOpenProhibition) {
    if (!isOpenProhibition) {
      this.setState({ isOpenProhibition: true });
    } else {
      this.setState({ isOpenProhibition: false });
    }
  }

  buttonProhibition(isOpenProhibition) {
    if (!isOpenProhibition) {
      return (
        <button
          className="buttonFigureProhibition"
          onClick={() => this.clickProhibition(this.state.isOpenProhibition)}
        >
          <b>Click Here To Read More</b>
        </button>
      );
    } else {
      return (
        <button
          className="buttonFigureProhibitionSM"
          onClick={() => this.clickProhibition(this.state.isOpenProhibition)}
        >
          <b>Click Here To Collapse Section</b>
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderProhibition(this.state.isOpenProhibition)}</div>;
  }
}

export default ProhibitionHomeSection;
