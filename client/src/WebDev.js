import React, { useState } from "react";
import Modal from "./Modal";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    cursor: "pointer",
    height: "auto",
    width: "500px",
    margin: "10px",
    boxShadow: "5px 5px 10px 2px black",
    transition: "transform 0.2s",   
  },
  container: {
    overflow: "hidden",
    top: "100px",
    marginBottom: "100px",
 }
}));

// id="park-btv-link"
// target="_blank"
// href="https://park-burlington.herokuapp.com/ "

export const WebDev = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentModal, setCurrentModal] = useState("");
  const classes = useStyles();
  
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
      text: "TwinThread.com pricing page and submission form",
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
      text: `Re-designing Burlington Vermont's public parking interface`,
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
  
  const handleModalOpen = (e) => {
    setCurrentModal(e.target.id)
    setIsModal(true)
  }

  const handleModalClose = () => {
    setIsModal(false)
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
      style={{ position: isModal ? "fixed" : "relative" }}
      spacing={2}>
        {!isModal && (
         <>
            {items.map((item, i) => (
              <Grid key={i} item>
                <img
                  id={item.id}
                  alt={item.alt}
                  className={classes.paper}
                  onClick={(e) => handleModalOpen(e)}
                  src={item.src}
                ></img>
                <div className="item-description">
                  <h4>{item.text}</h4>
                </div>
                </Grid>
            ))}
          </>
        )};
        {isModal && (
          <Modal
            handleModalClose={handleModalClose}
            currentModal={currentModal}
          />
      )}
      </Grid>
  );
};

export default WebDev;
