import React from "react";

export default class Marriott extends React.Component {
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
            <h1 class="center-text">New York Marriott East Side</h1>
            <br/>

            <div class="flex-center image-margin">
              <img src="../../images/hotels/marriott-outside.jpg" class="rounded-image"/>
            </div>

            <p><a href="http://www.marriott.com/hotels/travel/nycea-new-york-marriott-east-side/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2" target="_blank">The New York Marriott East Side</a> is another great option for your stay during the wedding weekend!
              Below are more details on the discounted room rates and how to make your reservation.
            </p>
            <br/>

            <p><b>ROOM RATES:</b></p>
            <p>Start date: 4/5/18</p>
            <p>End date: 4/8/18</p>
            <p>$199.00 (USD) per night</p>
            <br/>

            <p><b>RESERVATION METHOD:</b></p>
            <p>Online:&nbsp;
              <a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Halliday/Bisa%20Wedding%20Room%20Block%20%5Enycea%60harhara%60199.00%60USD%60false%602%604/5/18%604/8/18%603/8/18&app=resvlink&stop_mobi=yes" target="_blank">
                Book with the Halliday/Bisa Wedding Room Block
              </a>
            </p>

            <p><b>***Please contact our wedding planner, Christine Viola, at christinev@eapweddings.com for any assistance or issues.***</b></p>
            <br/>

            <p><b>CUT-OFF DATE:</b></p>
            <p>The final reservation cut-off date for the wedding block is 5:00 PM EST on February 20, 2018. After the final cut-off date, all sleeping rooms/suites not reserved with individual guest names and guaranteed with a credit card will be released.
              The Marriott will continue to accept reservations after the final cut-off date on an availability basis.</p>
            <br/>

            <div class="flex-center image-margin">
              <img src="../../images/hotels/marriott-inside.jpg" class="rounded-image"/>
            </div>
            <br/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
