import React from "react";

export default class TheRoger extends React.Component {
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
            <h1 class="center-text">The Roger</h1>
            <br/>
            <div class="flex-center image-margin">
              <img src="../../images/hotels/roger-outside.jpg" class="rounded-image"/>
            </div>

            <p><a href="http://www.therogernewyork.com/the-hotel" target="_blank">The Roger</a> is located on Madison Avenue in Midtown Manhattan, walking distance to the Empire State Building, Times Square, and the New York City Subway!
              This is where the wedding party will be staying for the weekend. Below are more details on the discounted room rates and how to make your reservation.
            </p>
            <br/>

            <p><b>ROOM RATES:</b></p>
            <h3>Thursday April 5, 2018</h3>
            <p>
              Deluxe King - $249<br/>
              Premiere Double - $279
            </p>
            <p>_________________________________________________________</p>

            <h3>Friday April 6, 2018</h3>
            <p>
              Deluxe King - $299<br/>
              Premiere Double - $329
            </p>
            <p>_________________________________________________________</p>

            <h3>Saturday April 7, 2018</h3>
            <p>
              Deluxe King - $299<br/>
              Premiere Double - $329
            </p>
            <p>_________________________________________________________</p>

            <p>The rates shown above are per night and do not include state and local taxes and fees ($33 facility fee per room per night and valet parking available).</p>
            <br/>

            <p><b>RESERVATION METHODS:</b></p>
            <p>Phone: (888) 448.7788 or (212) 448.7000 and refer to the Halliday-Bisa Wedding</p>

            <p>Email: reservations@therogernewyork.com and refer to the Halliday-Bisa Wedding</p>

            <p>You will be asked to provide a credit card to hold the reservation of your room. The card will not be charged until you arrive for check-in.</p>

            <p>24 hours notice prior to check-in is required for cancellation of a reservation.</p>

            <p><b>***Please contact our wedding planner, Christine Viola, at christinev@eapweddings.com for any assistance or issues.***</b></p>
            <br/>

            <p><b>ARRIVAL/DEPARTURE TIME:</b></p>
            <p>Check in time: 3:00 P.M.</p>
            <p>Check out time: 12:00 P.M.</p>
            <br/>

            <p><b>CUT-OFF DATE:</b></p>
            <p>The final reservation cut-off date for the wedding block is 5:00 PM EST on February 20, 2018. After the final cut-off date, all sleeping rooms/suites not reserved with individual guest names and guaranteed with a credit card will be released.
              The Roger will continue to accept reservations after the final cut-off date on an availability basis.</p>
            <br/>

            <div class="flex-center image-margin">
              <img src="../../images/hotels/roger-inside.png" class="rounded-image"/>
            </div>
            <br/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
