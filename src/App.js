import React, { Component } from "react";
import { Navbar, NavbarBrand, Media, Container, Row, Col, Jumbotron} from "reactstrap";
import "./App.css";
import { TIMEPERIODS } from './shared/timeperiods';
import { WILDWESTFIGURES} from './shared/wildwestfigures';
import BillyTheKid from "./components/BillyTheKid";
import WyattEarp from "./components/WyattEarp";
import JohnWesleyHardin from "./components/JohnWesleyHardin";
import WildBill from "./components/WildBill";
import JessieJames from "./components/JessieJames";
import "bootstrap/dist/css/bootstrap.min.css";
import WildWestBanner from "./components/WildWestBanner";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wildwestfigures: WILDWESTFIGURES,
      timeperiods: TIMEPERIODS
    };
  }


render () {
  return (
    <div className="Black">
      <Navbar className="Bar">
        <NavbarBrand className="logoApp" href="/">
          American Crime
        </NavbarBrand>
      </Navbar>

      <Container className="body">
        <Row>
          <div className="banner">
            <WildWestBanner timeperiods={this.state.timeperiods} />
          </div>
        </Row>
        <Row>
          <Col>
            <BillyTheKid figures={this.state.wildwestfigures} />
          </Col>
        </Row>
        <Row>
          <Col xl="8">
            <Row>
              <Col>
                <WyattEarp figures={this.state.wildwestfigures} />
              </Col>
            </Row>
            <Row>
              <Col xl="6">
                <JessieJames figures={this.state.wildwestfigures} />
              </Col>
              <Col xl="6">
                <WildBill figures={this.state.wildwestfigures} />
              </Col>
            </Row>
          </Col>

          <Col xl="4">
            <JohnWesleyHardin figures={this.state.wildwestfigures} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

}

export default App;
