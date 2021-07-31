import { getElementById } from 'domutils';
import { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => <div className={classes.backdrop} />;

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

function Modal(props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById('modal-root')
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById('modal-root')
        )}
      </>
    );
  }
  return null;
}

export default Modal;
