import React from "react";

import { Route, NavLink, Switch } from "react-router-dom";
import OurStory from "./OurStory";
import Accomodations from "./Accomodations";
import CeremonyReception from "./CeremonyReception";
import Home from "./Home";
import Login from "./Login";
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
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route path='/our-story' component={OurStory} />
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
