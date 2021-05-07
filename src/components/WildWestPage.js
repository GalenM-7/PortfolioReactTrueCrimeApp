import React , { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Media,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";
import BillyTheKid from "./BillyTheKid";
import WyattEarp from "./WyattEarp";
import JohnWesleyHardin from "./JohnWesleyHardin";
import WildWestBanner from "./WildWestBanner";
import JessieWildBill from "./JessieWildBill";
import { WILDWESTFIGURES } from "../shared/wildwestfigures";
import { TIMEPERIODS } from "../shared/timeperiods";

class WildWestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wildwestfigures: WILDWESTFIGURES,
      timeperiods: TIMEPERIODS,
    };
  }

  render() {
    return (
      <div className="Black">
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
                <Col>
                  <JessieWildBill figures={this.state.wildwestfigures} />
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

export default WildWestPage