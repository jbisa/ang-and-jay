import React from "react";

export default class PageNotFound extends React.Component {
  clickHome(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {
    return (
      <div>
      <div class="flex-center position-ref full-height">
        <div class="content curved-edges">
          <div class="content-padding text-width">
            <h1 class="center-text">404, sorry this page doesn't exist!</h1>
            <button class="button home-button" type="submit" onClick={this.clickHome.bind(this)}>Back to Home</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
