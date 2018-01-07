import React from "react";

export default class Countdown extends React.Component {
  constructor() {
    super();
    const countdownData = this.getCountdownData();
    this.state = {
      days: countdownData['days'],
      hours: countdownData['hours'],
      minutes: countdownData['minutes'],
      seconds: countdownData['seconds'],
      distance: new Date('April 7, 2018 17:00:00').getTime() - new Date().getTime()
    }
  }

  getCountdownData() {
    const now = new Date().getTime();
    const countDownDate = new Date('April 7, 2018 17:00:00').getTime();
    const distance = countDownDate - now;
    return {
      'now': now,
      'countDownDate': countDownDate,
      'distance': distance,
      'days': Math.floor(distance / (1000 * 60 * 60 * 24)),
      'hours': Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      'minutes': Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      'seconds': Math.floor((distance % (1000 * 60)) / 1000),
    }
  }

  myMethod() {
    if (this.refs.myRef) {
      this.setState({myVar: true});
    }
  }

  componentDidMount() {
    this.loadInterval = setInterval(() => {
        const countdownData = this.getCountdownData();

        this.setState({
          days: countdownData['days'],
          hours: countdownData['hours'],
          minutes: countdownData['minutes'],
          seconds: countdownData['seconds'],
          distance: new Date('April 7, 2018 17:00:00').getTime() - new Date().getTime()
        });
    }, 1000);
  }

  componentWillUnmount() {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

  render() {
    return (
      <div ref="myRef">
        {this.state.distance > 0 ? (
          <blockquote>{this.state.days} Days &#183; {this.state.hours} Hours &#183; {this.state.minutes} Minutes &#183; {this.state.seconds} Seconds</blockquote>
          /*<blockquote>{this.state.days} Days to go!</blockquote>*/
        ) : (
          <blockquote>TODAY IS WEDDING DAY!!!</blockquote>
        )}
      </div>
    );
  }
}
