import React from "react";

export default class CeremonyReception extends React.Component {
  render() {
    return (
      <div class="flex-center position-ref full-height">
        <div class="content curved-edges">
          <div class="content-padding text-width">
            <h1 class="center-text">Ceremony & Reception</h1>
              <p>Date: <span class="text-italics">Saturday, April 7, 2018</span></p>
              <p>Venue: <span class="text-italics"><a href="http://www.thefoundry.info/" target="_blank">The Foundry</a></span></p>
              <p>Address: <span class="text-italics">42-38 9th Street, Long Island City, NY 11101</span></p>
              <p>Phone: <span class="text-italics">(718)-786-7776</span></p>
              <p>Ceremony: <span class="text-italics">4-5 pm</span></p>
              <p>Cocktail Hour: <span class="text-italics">5-7 pm</span></p>
              <p>Reception: <span class="text-italics">7 pm</span></p>
          </div>
        </div>
      </div>
    );
  }
}
