import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Media,
  Container,
  Row,
  Col
} from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";


class WildWestBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
  
    return (
      <div className="banner">
        <div className="logoBanner">
          <img src={this.props.timeperiods[0].logo}></img>
        </div>
      </div>
    );
  }
}

export default WildWestBanner;
