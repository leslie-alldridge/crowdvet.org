import React, { Component } from 'react';
import Carousel from './Carousel';
import SignUpModal from './SignUpModal';
import './Landing.css';
import world from './world.svg';

class Landing extends Component {
  renderText() {
    return (
      <div className="text row flow-text">
        <p className="title col s12">Here at Kiva we are constanly asking</p>
        <div className="flow-text col s12">
          How can you make social enterprices make the world
        </div>
        <div className="flow-text col s12">
          a better place, even if you cant make a loan?
        </div>
      </div>
    );
  }
  renderWorld() {
    return (
      <div className="world">
        <div>Our borrowers are from all around the world</div>
        <img className="responsive-img" src={world} alt="" />
      </div>
    );
  }

  renderRecent() {
    return (
      <div className="recent flow-text">
        <div className="center-align ">Recent Loan Activity</div>
      </div>
    );
  }
  renderPrefooter() {
    return (
      <div className="flow-text" id="prefooter">
        <div className="center-align" id="prefooter">
          “Crowdvet.org gave me a chance to experience what its like to
        </div>
        <div className="center-align">
          work at a non-profit, and a sense of how I could help.”
        </div>
        <div id="after-text" className="center-align">
          Lauren S., Graduate Student @ Hult School of Business
        </div>
      </div>
    );
  }

  renderButton() {
    return (
      <div className="center-align">
        <a className="btn" id="evaluate">
          Evaluate a Sample Loan
        </a>
      </div>
    );
  }

  renderVideo() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h3 className="center-align" id="title">
              Kiva + You
            </h3>
            <p className="flow-text">
              Crowdvet.org aims to harness the knowledge of the crowd to give
              social enterprises the capital they need to scale.
            </p>
          </div>
          <div className="col s12 m6">
            <div className="video-text">
              <h3 className="center-align" id="title">
                Kiva + You
              </h3>
              <p className="flow-text">
                Crowdvet.org aims to harness the knowledge of the crowd to give
                social enterprises the capital they need to scale.
              </p>
              <a className="btn">Learn About CrowdVetting</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Carousel />
        <SignUpModal />
        {this.renderVideo()}
        {this.renderText()}
        {this.renderWorld()}
        {this.renderRecent()}
        {this.renderPrefooter()}
        {this.renderButton()}
      </div>
    );
  }
}

export default Landing;
