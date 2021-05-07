import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
          <React.Fragment>
            <Navbar dark sticky="top" expand="md">
              <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                  American Crime
                </NavbarBrand>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>

                  <NavLink
                    className="nav-link"
                    to="/WildWestPage"
                  >
                    WildWest
                  </NavLink>

                  <NavLink className="nav-link" to="/ProhibitionPage">
                    Prohibition
                  </NavLink>

                  <NavLink className="nav-link" to="/GreatDepressionPage">
                    Depression
                  </NavLink>
              </div>
            </Navbar>
          </React.Fragment>
        );
    }

}

export default Header