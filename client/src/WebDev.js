import React from "react";
import { Flex, Box, Text, Heading, Image } from "rebass";

class WebDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: false,
      currentModal: "",
    };
  }
  openModal = (event) => {
    this.setState({
      modalDisplay: true,
      currentModal: event.target.id,
    });
    console.log("clicked");
    console.log(event.target.id);
  };
  closeModal = (event) => {
    this.setState({
      modalDisplay: false,
    });
  };
  
  render() {
    return (
      <div id="web-dev-container">
        <div id="web-dev">
        <img
            id="b6bbc0cbd2bc4b6a8b50f336a309a031"
            alt="twinthread-webinar-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/webinar.png"
          ></img>
          <div className="item-description">
            <h4>TwinThread.com Go To Webinar registration page</h4>
          </div>

          <img
            id="baf453d4db5947d5b653480175c4c934"
            alt="twinthread-pricing-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/twinthreadPricing.png"
          ></img>
          <div className="item-description">
            <h4>TwinThread.com pricing page and submission form</h4>
          </div>

          <img
            id="96320ec895dd4060b77559a1cb3de073"
            alt="portfolio-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/portfolio-thumb.png"
          ></img>
          <div className="item-description">
            <h4>A video walk through of THIS website</h4>
          </div>

          <img
            id="87b0054d983542baa7735240d057593f"
            alt="park-burlington-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/parkBTV.png"
          ></img>
          <div className="item-description">
            <h4>
              Re-designing Burlington Vermont's parking interface with<br></br>{" "}
              JavaScript and Google Maps<br></br>
            </h4>
            </div>
            <div id="park-btv-container">
            <h4>
            <a

                id="park-btv-link"
                target="_blank"
                href="https://park-burlington.herokuapp.com/ "
              >
                See it live here
              </a>
              </h4>
              </div>

          <img
            id="e7754b14c80249eaaa0844afea3f4c84"
            alt="yelpington-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/yelpington.png"
          ></img>
          <div className="item-description">
            <h4>Geo Locating Burlington, VT businesses with React</h4>
          </div>

          <img
            id="5666b343d9bc43c892735bc1c6a53e8d"
            alt="tic-tac-toe-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/TicTac.png"
          ></img>
          <div className="item-description">
            <h4>Classic Tic Tac Toe in JavaScript</h4>
          </div>

          <img
            id="171415a1c6d745d39dda2471215219cb"
            alt="geo-vermonter-thumb"
            className="webdev-thumb"
            onClick={this.openModal}
            src="Images/geoVT.png"
          ></img>
          <div className="item-description">
            <h4>Geo location guessing game in JavaScript</h4>
          </div>
          <div className="more-to-come">
            <h3 id="more-on-the-way">More on the way, stay tuned...</h3>
          </div>
        </div>
        {this.state.modalDisplay ? (
          <Modal
            closeModal={this.closeModal}
            currentModal={this.state.currentModal}
          />
        ) : null}
      </div>
    );
  }
}

function Modal(props) {
  return (
    <div id="webDev">
      <div id="Modal" className="modal">
        <div className="video">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: "0",
            }}
          >
            <iframe
              src={`https://www.loom.com/embed/${props.currentModal}`}
              frameBorder="0"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </div>
        <button
          className="headerButton"
          id="closeModalButton"
          onClick={props.closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// never call functions, they are called in event
// all componants should be capitalized

export default WebDev;
