import React from "react";

export default class IndiaWedding extends React.Component {
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
              <h1 class="center-text">Hindu Wedding Festivities</h1>

              <h2>- Ganesh Pooja -</h2>
              <p>Bisa Residence</p>
              <p>50 Russells Way, Westford, MA, 01886</p>
              <p>Friday, March 16, 2018</p>
              <p>Attire: Traditional Indian or Casual</p>
              <p>Time: TBD</p>
              <br/>

              <h2>- Sangeeth -</h2>
              <p>Bisa Residence</p>
              <p>50 Russells Way, Westford, MA, 01886</p>
              <p>Saturday, March 17, 2018</p>
              <p>Attire: Traditional Indian or Semi-Formal</p>
              <p>Time: TBD</p>
              <br/>

              <h2>- Mehendi -</h2>
              <p>Vivanta</p>
              <p>1-10-147 & 148, Begumpet, Hyderabad, Telangana 500016, India</p>
              <p>July 6, 2018</p>
              <p>Attire: Traditional Indian or Semi-Formal</p>
              <p>Time: TBD</p>
              <br/>

              <h2>- Ceremony -</h2>
              <p>Vivanta</p>
              <p>1-10-147 & 148, Begumpet, Hyderabad, Telangana 500016, India</p>
              <p>July 7, 2018</p>
              <p>Attire: Traditional Indian or Formal</p>
              <p>Time: TBD</p>
              <br/>

              <h2>- Reception -</h2>
              <p>Vivanta</p>
              <p>1-10-147 & 148, Begumpet, Hyderabad, Telangana 500016, India</p>
              <p>July 8, 2018</p>
              <p>Attire: Traditional Indian or Formal</p>
              <p>Time: TBD</p>
              <br/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
