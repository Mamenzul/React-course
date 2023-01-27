import classes from "./Modal.module.css";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop closeCart={props.closeCart}/>, portalElement)};
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      ;
    </>
  );
};

export default Modal;
