import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import OurStory from "./OurStory";
import Accomodations from "./Accomodations";
import CeremonyReception from "./CeremonyReception";
import Home from "./Home";
import Login from "./Login";
import Music from "../components/Music";
import Registry from "./Registry";
import RSVP from "./RSVP";
import SongRequests from "./SongRequests";
import ThingsToDo from "./ThingsToDo";
import Travel from "./Travel";
import Header from "../components/Header";

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName="slide">
          <WrappedComponent {...props} />
        </ReactCSSTransitionGroup>
    );
    return TransitionedComponent;
};

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={TransitionedPage(Home)} />
          <Route path='/our-story' component={TransitionedPage(OurStory)} />
          <Route path='/ceremony-reception' component={TransitionedPage(CeremonyReception)} />
          <Route path='/accomodations' component={TransitionedPage(Accomodations)} />
          <Route path='/travel' component={TransitionedPage(Travel)} />
          <Route path='/things-to-do' component={TransitionedPage(ThingsToDo)} />
          <Route path='/registry' component={TransitionedPage(Registry)} />
          <Route path='/rsvp' component={TransitionedPage(RSVP)} />
        </div>
        <Music />
      </div>
    );
  }
}
