import React , { Component } from "react";





class WildWestBanner extends Component {


    render() {
        return (
          <div className="logoBanner">
            <img src={this.props.timeperiods[0].logo}></img>
          </div>
        );
    }
}

export default WildWestBanner