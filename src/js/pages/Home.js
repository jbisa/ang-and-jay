import React from "react";

import Countdown from "../components/Countdown"
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="flex-center position-ref full-height">
          <div class="content curved-edges">
            <div class="content-padding">
              <div class="title m-b-md">
                Ang & Jay
              </div>
              <h1>4/7/2018 | The Foundry | Queens, NY</h1>
              <Countdown />
            </div>
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}
