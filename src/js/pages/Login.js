import React from "react";
import Footer from "../components/Footer";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") === "528926") {
      this.props.history.push("/home");
    }
  }

  enterSite(e) {
    e.preventDefault();
    if (this.refs.code !== null) {
    	var input = this.refs.code;
			var inputValue = input.value;
      window.sessionStorage.setItem("codeEntered", inputValue);
      if (inputValue === "528926") {
        this.props.history.push("/home");
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
                <input class="input-field" type="text" ref="code" placeholder="Site Code" />
                <input
                  class="button"
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
