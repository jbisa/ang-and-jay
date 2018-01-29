import React from "react";
import { Route, Link, Switch } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div class="content flex-center position-ref header text-font">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="our-story">Our Story</Link></li>
            <li class="dropdown">
                <Link to="nyc-ceremony-reception" class="dropbtn">Christian Wedding</Link>
                <div class="dropdown-content">
                  <Link to="nyc-ceremony-reception">Ceremony & Reception</Link>
                  <Link to="nyc-things-to-do">Things To Do</Link>
                </div>
            </li>
            <li class="dropdown">
                <Link to="the-roger" class="dropbtn">NYC Accomodations</Link>
                <div class="dropdown-content">
                  <Link to="the-roger">The Roger</Link>
                  <Link to="new-york-marriott-east-side">New York Marriott East Side</Link>
                  <Link to="w-new-york">W New York</Link>
                </div>
            </li>
            <li class="dropdown">
                <Link to="india-wedding" class="dropbtn">Hindu Wedding</Link>
                <div class="dropdown-content">
                  <Link to="india-wedding">Ceremony & Reception</Link>
                  <Link to="india-things-to-do">Things To Do</Link>
                </div>
            </li>
            <li><Link to="india-accomodations">India Accomodations</Link></li>
        </ul>
      </div>
    );
  }
}
