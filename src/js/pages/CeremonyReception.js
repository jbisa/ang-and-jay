import React from "react";
import Header from "../components/Header";

export default class CeremonyReception extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") !== "528926") {
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div class="flex-center position-ref full-height">
          <div class="content curved-edges">
            <div class="content-padding text-width">
              <h1 class="center-text">Ceremony & Reception</h1>
              <p>Saturday, April 7, 2018</p>
              <p>The Foundry</p>
              <p>42-38 9th Street, Long Island City, NY 11101</p>
              <p>Attire: Formal</p>
              <p>Ceremony: 3-4 pm</p>
              <p>Cocktail Hour: 4-6 pm</p>
              <p>Reception: 6 pm</p>
            </div>
          </div>
        </div>
        <div class="flex-center">
          <img src="../images/venue/foundry_ceremony_2.jpg" width="640" height="428"></img>
        </div>
      </div>
    );
  }
}
