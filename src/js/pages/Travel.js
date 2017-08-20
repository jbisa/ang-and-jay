import React from "react";

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") !== "528926") {
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div>
      <div class="flex-center position-ref full-height">
        <div class="content curved-edges">
          <div class="content-padding text-width">
            <h1 class="center-text">Travel & Transportation</h1>
            <p>...Coming soon...</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
