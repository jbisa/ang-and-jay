import React from "react";
import Countdown from "../components/Countdown";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") !== "528926") {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
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
    </div>
    );
  }
}
