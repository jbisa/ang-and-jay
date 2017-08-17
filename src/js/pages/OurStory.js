import React from "react";
import Header from "../components/Header";
import Slider from "react-slick";
import Session from "../session/session";

export default class OurStory extends React.Component {
  constructor(props) {
    super(props);
    if (Session.getCodeEntered !== '123') {
      this.props.history.push("/");
    }
  }

  render() {
    const settings = {
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
      <Header />
      <div class="flex-center position-ref extra-margin-top">
        <div class="content curved-edges">
          <div class="content-padding text-width">
            <h1>Our Story</h1>
            <p>
              Angela and Jay first met in 2009 at Worcester Polytechnic Institute through Angela's twin sister, Amelia.
              They became friends and kept in touch through the years (thank you Facebook/Twitter/IG #PrayerHandsEmoji #RaisedHandsEmoji).
            </p>

            <p>
              They started dating in 2013 while Angela was living in Brooklyn, NY and Jay was in Dorchester, MA. Despite the distance, they
              would each take turns making the commute to see each other every few weeks. New York City is a special place for them since they've
              shared several significant memories there...like Jay getting to see a Red Sox vs. Yankees games at Yankee Stadium! Check out our <a href="#/things-to-do">Things
              To Do</a> section for places Angela and Jay visited that you may also enjoy.
            </p>

            <p>
              Today, Angela and Jay live together in Roxbury, MA. Angela completed her Masters in Education in May of 2017 and is a middle school English
              teacher in the Boston area. Jay is currently a Software Developer at Wayfair.
            </p>

            <p>
              #AngAndJayAllDay
            </p>
          </div>
        </div>
      </div>
      <div class="flex-center"><img src="../../images/us/ang_kid.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/jay_kid.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/ang_grad.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/jay_ang_desi.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/proposal.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/ca_wedding.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/france_wedding.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/venice.jpg"/></div>
      <div class="flex-center"><img src="../../images/us/yankee_stadium.jpg"/></div>
      </div>
    );
  }
}
