import React from "react"

export const Modal = ({currentModal, handleModalClose}) => {
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
                  src={`https://www.loom.com/embed/${currentModal}`}
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
              onClick={handleModalClose}
            >
              Close
        </button>
          </div>
        </div>
  );
}

export default Modal
