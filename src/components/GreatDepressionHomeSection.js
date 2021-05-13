import React, { Component } from "react";
import { Row, Container, Media, Col } from "reactstrap";

class GreatDepressionHomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenGreatDepression: false,
    };
  }

  renderGreatDepression(isOpenGreatDepression) {
    if (isOpenGreatDepression) {
      return (
        <div>
          <img
            src={this.props.timeperiods[2].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About The Great Depression</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[2].significance}
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
          <div>
            {this.buttonGreatDepression(this.state.isOpenGreatDepression)}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={this.props.timeperiods[2].homebanner}
            className="bannerHomeImage"
          ></img>
          <div>
            <p className="westTimePeriodHeading">
              <b>Information About The Great Depression</b>
            </p>
            <p className="TimePeriodText">
              {this.props.timeperiods[0].significance}
            </p>
            <div>
              {this.buttonGreatDepression(this.state.isOpenGreatDepression)}
            </div>
          </div>
        </div>
      );
    }
  }

  clickGreatDepression(isOpenGreatDepression) {
    if (!isOpenGreatDepression) {
      this.setState({ isOpenGreatDepression: true });
    } else {
      this.setState({ isOpenGreatDepression: false });
    }
  }

  buttonGreatDepression(isOpenGreatDepression) {
    if (!isOpenGreatDepression) {
      return (
        <button
          className="buttonFigureGreatDepression"
          onClick={() =>
            this.clickGreatDepression(this.state.isOpenGreatDepression)
          }
        >
          <b>Click Here To Read More</b>
        </button>
      );
    } else {
      return (
        <button
          className="buttonFigureGreatDepressionSM"
          onClick={() =>
            this.clickGreatDepression(this.state.isOpenGreatDepression)
          }
        >
          <b>Click Here To Collapse Section</b>
        </button>
      );
    }
  }

  render() {
    return (
      <div>{this.renderGreatDepression(this.state.isOpenGreatDepression)}</div>
    );
  }
}

export default GreatDepressionHomeSection;
