import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div class="content flex-center position-ref header text-font">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="our-story">Our Story</NavLink></li>
            <li class="dropdown">
                <NavLink to="ceremony-reception" class="dropbtn">Details</NavLink>
                <div class="dropdown-content">
                  <NavLink to="ceremony-reception">Ceremony & Reception</NavLink>
                  <NavLink to="accomodations">Accomodations</NavLink>
                  <NavLink to="travel">Travel & Transportation</NavLink>
                  <NavLink to="rsvp">RSVP</NavLink>
                </div>
            </li>
            <li><NavLink to="things-to-do">Things To Do</NavLink></li>
        </ul>
      </div>
    );
  }
}
