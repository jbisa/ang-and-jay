import React from "react";
import Footer from "../components/Footer";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPasscodeError: false
    }
    // Check to see if the user already entered the correct passcode
    if (window.sessionStorage.getItem("codeEntered") === "528926") {
      this.props.history.push("/home");
    }
  }

  enterSite(e) {
    e.preventDefault();
    this.checkPasscode();
  }

  handleKeyUp(e) {
    e.preventDefault();
    // Enter key
    if (e.keyCode === 13) {
      this.checkPasscode();
    }
  }

  checkPasscode() {
    if (this.refs.code !== null) {
    	var input = this.refs.code;
			var inputValue = input.value;
      window.sessionStorage.setItem("codeEntered", inputValue);
      if (inputValue === "528926") {
        this.props.history.push("/home");
      } else {
        this.showPasscodeError(true);
      }
    } else {
      this.showPasscodeError(true);
    }
  }

  showPasscodeError(showPasscodeError) {
    this.setState({showPasscodeError});
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
              <p>Please enter the six digit code you received to enter the site.</p>
              <div>
                <input class="input-field" type="text" ref="code" placeholder="Site Code" onKeyUp={this.handleKeyUp.bind(this)}/>
                <button id="enterButton" class="button" type="submit" onClick={this.enterSite.bind(this)}>Enter Site</button>
              </div>
              {this.state.showPasscodeError && <p class="error-msg">Sorry, the passcode you entered is incorrect.</p>}
            </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}
