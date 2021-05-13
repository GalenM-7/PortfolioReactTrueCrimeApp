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
import JessieWildBill from "./components/JessieWildBill";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import WildWestPage from "./components/WildWestPage";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";



class App extends Component {
 
render () {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

}

export default App;
