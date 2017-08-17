import React from "react";
import Countdown from "../components/Countdown";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="flex-center position-ref full-height">
          <div class="content curved-edges">
            <div class="content-padding">
              <div class="title m-b-md cursive-font">
                Ang & Jay
              </div>
              <h2 class="home-h2">4/7/2018 | The Foundry | Queens, NY</h2>
              <Countdown />
            </div>
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}
