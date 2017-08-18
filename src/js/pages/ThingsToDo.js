import React from "react";
import Header from "../components/Header";

export default class ThingsToDo extends React.Component {
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
      <div class="flex-center position-ref extra-margin-top">
        <div class="content curved-edges">
          <div class="content-padding text-width">
            <h1 class="center-text">Things To Do</h1>
            <h2>- Brooklyn -</h2>
            <div>
              <ol>
                <li class="list">
                  <a class="content-link" href="https://www.tripadvisor.com/Attraction_Review-g60827-d102741-Reviews-Brooklyn_Bridge-Brooklyn_New_York.html" target="_blank">Brooklyn Bridge</a>
                </li>
                <li class="list">
                  <a class="content-link" href="http://www.cntraveler.com/stories/2015-08-11/beyond-the-brooklyn-bridge-what-to-do-in-dumbo-brooklyn" target="_blank">Dumbo</a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.prospectpark.org/" target="_blank">Prospect Park</a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.bbg.org/" target="_blank">Brooklyn Botanic Garden</a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.tripadvisor.com/Restaurant_Review-g60827-d2139039-Reviews-Gandhi_Fine_Indian_Cuisine-Brooklyn_New_York.html" target="_blank">Gandhi Indian Restaurant</a>
                </li>
              </ol>
            </div>
            <h2>- Manhattan -</h2>
            <div>
              <ol>
                <li class="list">
                  <a class="content-link" href="http://www.centralparknyc.org/" target="_blank">Central Park</a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.tripadvisor.com/Attraction_Review-g60763-d210108-Reviews-American_Museum_of_Natural_History-New_York_City_New_York.html" target="_blank">
                    Museum of Natural History
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.tripadvisor.com/Attraction_Review-g60763-d102751-Reviews-Hayden_Planetarium-New_York_City_New_York.html" target="_blank">
                    Hayden Planetarium
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.guggenheim.org/" target="_blank">
                    Guggenheim Museum
                  </a>
                </li>
              </ol>
            </div>
            <h2>- Queens -</h2>
            <div>
              <ol>
                <li class="list">
                  <a class="content-link" href="https://www.timeout.com/newyork/attractions/flushing-meadows-corona-park-queens-ny" target="_blank">
                    Flushing Meadows Corona Park
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="http://momaps1.org/" target="_blank">
                    Museum of Modern Art (MoMA PS1)
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://nysci.org/" target="_blank">
                    New York Hall of Science
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="http://www.movingimage.us/" target="_blank">
                    Museum of the Moving Image
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://queensbotanical.org/" target="_blank">
                    Queens Botanic Garden
                  </a>
                </li>
              </ol>
            </div>
            <h2>- Bronx -</h2>
            <div>
              <ol>
                <li class="list">
                  <a class="content-link" href="https://bronxzoo.com/" target="_blank">
                    Bronx Zoo
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="http://www.bronxmuseum.org/" target="_blank">
                    Bronx Museum of the Arts
                  </a>
                </li>
                <li class="list">
                  <a class="content-link" href="https://www.mlb.com/yankees" target="_blank">
                    Yankee Stadium (Opening Day TBD)
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
