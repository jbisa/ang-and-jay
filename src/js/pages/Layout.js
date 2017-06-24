import React from "react";

import { Route, NavLink, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import Accomodations from "./Accomodations";
import CeremonyReception from "./CeremonyReception";
import Header from "../components/Header";
import Home from "./Home";
import Music from "../components/Music";
import Photos from "./Photos";
import Registry from "./Registry";
import RSVP from "./RSVP";
import SongRequests from "./SongRequests";
import ThingsToDo from "./ThingsToDo";
import Travel from "./Travel";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/ceremony-reception' component={CeremonyReception} />
          <Route path='/accomodations' component={Accomodations} />
          <Route path='/travel' component={Travel} />
          <Route path='/things-to-do' component={ThingsToDo} />
          <Route path='/registry' component={Registry} />
          <Route path='/photos' component={Photos} />
          <Route path='/rsvp' component={RSVP} />
        </div>
        <Music />
      </div>
    );
  }
}
