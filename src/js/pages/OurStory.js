import React from "react";
import Slider from "react-slick";

export default class OurStory extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("codeEntered") !== "528926") {
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
              Today, Angela and Jay live together in Roxbury, MA. Angela completed her Masters in Education in May of 2017 and is a high school English
              teacher at Pioneer Charter School of Science I. Jay is currently a Software Developer at Wayfair.
            </p>

            <p>
              #AngAndJayAllDay
            </p>
          </div>
        </div>
      </div>

      {/* Timeline...
      <div class="flex-center">
        <section id="cd-timeline">
          <div class="cd-timeline-block">
		        <div class="cd-timeline-img">
			       <img src="../../images/us/jay_kid.jpg" class="rounded-image"/>
		        </div>
            <div class="cd-timeline-img">
			       <img src="../../images/us/ang_kid.jpg" class="rounded-image"/>
		        </div>
            <div class="cd-timeline-img">
			       <img src="../../images/us/ang_kid.jpg" class="rounded-image"/>
		        </div>
	        </div>
        </section>
      </div>*/}

      <div class="flex-center image-margin"><img src="../../images/us/ang_kid_2.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/jay_kid.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/ang_grad.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/jay_ang_desi.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/proposal.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/ang_jay_wedding.JPG" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/venice.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/ca_wedding.jpg" class="rounded-image"/></div>
      <div class="flex-center image-margin"><img src="../../images/us/yankee_stadium.jpg" class="rounded-image"/></div>
      </div>
    );
  }
}
