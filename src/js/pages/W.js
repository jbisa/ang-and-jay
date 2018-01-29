import React from "react";

export default class W extends React.Component {
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
            <h1 class="center-text">W New York</h1>
            <br/>

            <div class="flex-center image-margin">
              <img src="../../images/hotels/w-outside.jpg" class="rounded-image"/>
            </div>

            <p><a href="http://www.wnewyork.com/" target="_blank">The W New York</a> is another great option for your stay during the wedding weekend!
              Below are more details on the discounted room rates and how to make your reservation.
            </p>
            <br/>

            <p><b>ROOM RATES:</b></p>
            <p>Start date: 4/5/18</p>
            <p>End date: 4/8/18</p>
            <p>$219.00 (USD) per night</p>
            <br/>

            <p><b>RESERVATION METHODS:</b></p>
            <p>Online:&nbsp;
              <a href="https://www.starwoodmeeting.com/events/start.action?id=1712069416&key=18D92A41" target="_blank">
                Book with the Halliday/Bisa Wedding Room Block
              </a>
            </p>

            <p>Phone: Call 1-877-WHOTELS or 1-888-627-9104 and ask for W New York and the Halliday and Bisa Wedding Room Block April 2018.</p>
            <p><b>***Please note, you will receive a sold out message if you attempt to choose dates outside of April 5th-8th, 2017.
              Contact our wedding planner, Christine Viola, at christinev@eapweddings.com for any assistance or issues.***</b></p>
            <br/>

            <p><b>CUT-OFF DATE:</b></p>
            <p>The final reservation cut-off date for the wedding block is 5:00 PM EST on February 20, 2018. After the final cut-off date, all sleeping rooms/suites not reserved with individual guest names and guaranteed with a credit card will be released.
              The W will continue to accept reservations after the final cut-off date on an availability basis.</p>
            <br/>

            <div class="flex-center image-margin">
              <img src="../../images/hotels/w-inside.jpg" class="rounded-image"/>
            </div>
            <br/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
