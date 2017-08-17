import React from "react";
import Footer from "../components/Footer";
import { withRouter } from "react-router-dom";
import Session from "../session/session";

export default class Login extends React.Component {
  enterSite(e) {
    e.preventDefault();
    if (this.refs.code !== null) {
    	var input = this.refs.code;
			var inputValue = input.value;
      Session.setCodeEntered(inputValue);
      if (inputValue === "123") {
        this.props.history.push("/home");
      } else {
        alert('SORRY');
      }
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
              <h2 class="home-h2">We're getting married!</h2>

              <p>Please enter the code you received via email to enter the site.</p>
              <div>
                <input type="text" ref="code" placeholder="Code" />
                <input
                  type="button"
                  value="Enter Site"
                  onClick={this.enterSite.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}
