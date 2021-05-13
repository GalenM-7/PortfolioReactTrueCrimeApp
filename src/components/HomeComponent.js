import React, { Component } from 'react';
import { Row, Container, Media, Col } from 'reactstrap';
import { TIMEPERIODS } from '../shared/timeperiods';
import BillyKidBanner95New from "../images/BillyKidBanner95New.png";
import WildWestHomeSection from './WildWestHomeSection';
import ProhibitionHomeSection from'./ProhibitionHomeSection';
import GreatDepressionHomeSection from "./GreatDepressionHomeSection";


class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeperiods: TIMEPERIODS,
    };
  }

  

  render() {
    return (
      <div className="Black">
        <Container className="body">
          <Row>
            <p className="homeHeadline">
              <b>Do You Like Reading About Historical True Crime Figures? </b>
            </p>

            <p className="textHomeAbout">
              Then this app is for you. It gives you information about different
              historical figures in the true crime world. These are broken up
              into three categories. They include the Wild West, Prohibiton, and
              the Great Depression. Below you can click on the buttons to read
              about the time period in general. Then in the upper right hand
              corner are links to the main page for each of these sections. The
              pages are set up like a newspaper and include a main story, two or
              three secondary stories, and an opinion story that looks at an
              aspect of a figure's life that isn't so cut and dry. You will see
              a little bit of each story and can click a button to expand or
              collapse any article you like. Also to view my sources, you can
              click on the button below.
            </p>

            <button className="buttonSources">View My Sources</button>
          </Row>
          <Row>
            <div className="bannerHomeImage">
              <WildWestHomeSection timeperiods={this.state.timeperiods} />
            </div>
          </Row>
          <Row>
            <div className="bannerHomeImage">
              <ProhibitionHomeSection timeperiods={this.state.timeperiods} />
            </div>
          </Row>
          <Row>
            <div className="bannerHomeImage">
              <GreatDepressionHomeSection
                timeperiods={this.state.timeperiods}
              />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeComponent