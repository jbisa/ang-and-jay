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
                <Link to="ceremony-reception" class="dropbtn">Details</Link>
                <div class="dropdown-content">
                  <Link to="ceremony-reception">Ceremony & Reception</Link>
                  <Link to="accomodations">Accomodations</Link>
                  <Link to="travel">Travel & Transportation</Link>
                </div>
            </li>
            <li><Link to="things-to-do">Things To Do</Link></li>
        </ul>
      </div>
    );
  }
}
