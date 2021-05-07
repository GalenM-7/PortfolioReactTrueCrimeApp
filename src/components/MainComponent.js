import React, { Component } from 'react';
import WildWestPage from './WildWestPage';
import GreatDepressionPage from './GreatDepressionPage';
import ProhibitionPage from './ProhibitionPage';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeComponent from './HomeComponent';

class Main extends Component {
   

    render () {

        const HomePage = () => {
            return (
                <HomeComponent />
            )
        }

        return (
          <div>
            <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/WildWestPage"
                render={() => <WildWestPage />}
              />
              <Route
                exact
                path="/ProhibitionPage"
                render={() => <ProhibitionPage />}
              />
              <Route
                exact
                path="/GreatDepressionPage"
                render={() => <GreatDepressionPage />}
              />
              <Redirect to="/home" />
            </Switch>
          </div>
        );
    }

}

export default Main