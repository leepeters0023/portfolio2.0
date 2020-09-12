import React, { useState } from "react";
import { Flex, Box, Text, Heading, Image } from "rebass";
import { videos } from "./Videos";

const WebDev = () => {
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
  };
  return (
    <Flex>
      <Flex flexWrap="wrap" mx={-2}>
        {videos.map(({ videoId, alt, className, src, copy }, i) => (
          <Box width={1 / 2} px={2}>
            <Image
              id={videoId}
              alt={alt}
              className={className}
              src={src}
              onClick={handleOpen()}
            />
            <Text p={1} color="background" bg="primary">
              {copy}
            </Text>
          </Box>
        ))}
      </Flex>
      {isModal && (
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
                  //src={`https://www.loom.com/embed/${props.currentModal}`}
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
              onClick={handleClose()}
            >
              Close
            </button>
          </div>
        </div>
      )};
    </Flex>
  );
};

export default WebDev;
