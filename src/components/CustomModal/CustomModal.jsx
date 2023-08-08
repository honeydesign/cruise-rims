import React from "react";
import ReactModal from "react-modal";
import styles from "./style.module.css";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    WebkitOverflowScrolling: "touch",
    overflow: "auto",
    width: "900px",
    maxWidth: "90vw",
    paddingInline: "5vw",
    paddingBlock: 45,
    maxHeight: "90vh",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    overscrollBehavior: "contain",
    zIndex: 20,
    // position: 'fixed',
  },
};

const CustomModal = ({ title, modalState, closeModal, children }) => {
  React.useEffect(() => {
    // Check if modal is open and prevent body from scrolling
    if (typeof window !== "undefined") {
      const body = document.body;

      if (modalState) {
        // Disable scroll
        body.style.overflow = "hidden";
        body.style.height = "100vh";
      } else {
        body.style.overflowY = "auto";
        body.style.height = "auto";
      }
    }
  }, [modalState]);

  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={closeModal}
      style={{
        content: customStyles.content,
        overlay: customStyles.overlay,
      }}
      closeTimeoutMS={500}
    >
      <div className={styles.modalTitleContainer}>
        <h1>{title}</h1>
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "transparent",
          }}
        >
          &#x2715;
        </button>
      </div>
      {children}
    </ReactModal>
  );
};

export default CustomModal;
