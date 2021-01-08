import React, { useState } from "react";
import Modal from "./Modal";

// id="park-btv-link"
// target="_blank"
// href="https://park-burlington.herokuapp.com/ "

export const WebDev = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const items = [
    {
      id: "b6bbc0cbd2bc4b6a8b50f336a309a031",
      alt: "twinthread-webinar-thumb",
      src: "Images/webinar.png",
      text: "TwinThread.com Go To Webinar registration page",
    },
    {
      id: "baf453d4db5947d5b653480175c4c934",
      alt: "twinthread-pricing-thumb",
      src: "Images/twinthreadPricing.png",
      text: "TwinThread.com pricing page and submission form<",
    },
    {
      id: "96320ec895dd4060b77559a1cb3de073",
      alt: "portfolio-thumb",
      src: "Images/portfolio-thumb.png",
      text: "A video walk through of THIS website",
    },
    {
      id: "87b0054d983542baa7735240d057593f",
      alt: "park-burlington-thumb",
      src: "Images/parkBTV.png",
      text: `Re-designing Burlington Vermont's public parking interface. Seen live at park-burlington.herokuapp.com`,
    },
    {
      id: "4b14c80249eaaa0844afea3f4c84",
      alt: "yelpington-thumb",
      src: "Images/yelpington.png",
      text: "Geo Locating Burlington, VT businesses with React",
    },
    {
      id: "5666b343d9bc43c892735bc1c6a53e8d",
      alt: "tic-tac-toe-thumb",
      src: "Images/TicTac.png",
      text: "Classic Tic Tac Toe in JavaScript",
    },
    {
      id: "171415a1c6d745d39dda2471215219cb",
      alt: "geo-vermonter-thumb",
      src: "Images/geoVT.png",
      text: "Geo location guessing game in JavaScript",
    },
  ];
  //currentModal: event.target.id,

  const handleModalOpen = (e) => {
    setCurrentModal(e.target.id)
    setIsModal(true)
  }

  const handleModalClose = () => {
    setIsModal(false)
  }

  return (
    <div id="web-dev-container">
      <div id="web-dev" style={{ position: isModal ? "fixed" : "relative" }}>
        {!isModal && (
            items.map((item, i) => (
              <>
                <img
                  id={item.id}
                  alt={item.alt}
                  className="webdev-thumb"
                  onClick={(e) => handleModalOpen(e)}
                  src={item.src}
                ></img>
                <div className="item-description">
                  <h4>{item.text}</h4>
                </div>
              </>
            ))
        )};
        {isModal && (
          <Modal
            handleModalClose={handleModalClose}
            currentModal={currentModal}
          />
        )}
      </div>
    </div>
  );
};

export default WebDev;
