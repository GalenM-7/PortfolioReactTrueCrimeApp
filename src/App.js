import React, { Component } from "react";
import { Navbar, NavbarBrand, Media, Container, Row, Col, Jumbotron} from "reactstrap";
import "./App.css";
import { TIMEPERIODS } from './shared/timeperiods';
import { WILDWESTFIGURES} from './shared/wildwestfigures';
import WildWestBanner from "./components/WildWestBanner";
import BillyTheKid from "./components/BillyTheKid";
import WyattEarp from "./components/WyattEarp";
import JohnWesleyHardin from "./components/JohnWesleyHardin";
import WildBill from "./components/WildBill";
import JessieJames from "./components/JessieJames";

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
    <div>
      <Navbar>
        <NavbarBrand href="/"></NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <img src="assets/images/WildWestLogo.png" max width="100%"></img>
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
