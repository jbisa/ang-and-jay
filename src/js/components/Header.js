import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div class="content flex-center position-ref header">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about-us">About Us</NavLink></li>
            <li class="dropdown">
                <NavLink to="ceremony-reception" class="dropbtn">Details</NavLink>
                <div class="dropdown-content">
                  <NavLink to="ceremony-reception">Ceremony & Reception</NavLink>
                  <NavLink to="accomodations">Accomodations</NavLink>
                  <NavLink to="travel">Travel & Transportation</NavLink>
                  <NavLink to="things-to-do">Things To Do</NavLink>
                </div>
            </li>
            <li><NavLink to="registry">Registry</NavLink></li>
            <li><NavLink to="photos">Photos</NavLink></li>
            <li><NavLink to="rsvp">RSVP</NavLink></li>
        </ul>
      </div>
    );
  }
}
