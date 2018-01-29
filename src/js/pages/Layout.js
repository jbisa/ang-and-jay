import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import OurStory from "./OurStory";
import TheRoger from "./TheRoger";
import Marriott from "./Marriott";
import W from "./W";
import NycCeremonyReception from "./NycCeremonyReception";
import IndiaWedding from "./IndiaWedding";
import IndiaAccomodations from "./IndiaAccomodations";
import Home from "./Home";
import Login from "./Login";
import Music from "../components/Music";
import Registry from "./Registry";
import RSVP from "./RSVP";
import SongRequests from "./SongRequests";
import NycThingsToDo from "./NycThingsToDo";
import IndiaThingsToDo from "./IndiaThingsToDo";
import Travel from "./Travel";
import Header from "../components/Header";
import PageNotFound from "./PageNotFound";

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
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={TransitionedPage(Home)} />
          <Route path='/our-story' component={TransitionedPage(OurStory)} />
          <Route path='/nyc-ceremony-reception' component={TransitionedPage(NycCeremonyReception)} />
          <Route path='/nyc-things-to-do' component={TransitionedPage(NycThingsToDo)} />
          <Route path='/the-roger' component={TransitionedPage(TheRoger)} />
          <Route path='/new-york-marriott-east-side' component={TransitionedPage(Marriott)} />
          <Route path='/w-new-york' component={TransitionedPage(W)} />
          <Route path='/india-wedding' component={TransitionedPage(IndiaWedding)} />
          <Route path='/india-things-to-do' component={TransitionedPage(IndiaThingsToDo)} />
          <Route path='/india-accomodations' component={TransitionedPage(IndiaAccomodations)} />
          <Route component={TransitionedPage(PageNotFound)} />
        </Switch>
        <Music />
      </div>
    );
  }
}
