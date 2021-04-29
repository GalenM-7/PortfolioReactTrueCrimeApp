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
      isOpen: false,
    };
  }

  render() {
    
    //const wildWestBannerPopup = this.props.timeperiods[0].name
     // const wildWestBannerPopup = this.props.timeperiods.filter(timeperiod => {
       //   timeperiod.id = 0
        //})
    
    return (
      <div>
        <Media className="mt-1">
          <Media
            object
            data-src="assets/images/WildWestLogo.png"
            //{this.props.timeperiods[0].logo}
            alt="Wild West Section Logo"
          />
        </Media>
     
        ;
      </div>
    );
  }
}

export default WildWestBanner;
