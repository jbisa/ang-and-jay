import React from "react";

export default class IndiaAccomodations extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") !== "528926") {
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <div>
        <div class="flex-center position-ref extra-margin-top">
          <div class="content curved-edges">
            <div class="content-padding text-width">
            <h1 class="center-text">India Accomodations</h1>
              <p>...Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
