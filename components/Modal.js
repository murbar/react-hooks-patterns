import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from './Portal';

const Styles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: auto;
  overflow: scroll;
  z-index: 500;
  /* transform: scale(1); */
  /* will-change: transform, opacity; */
`;

Modal.Box = styled.div``;
Modal.ButtonRow = styled.div``;

export default function Modal({ children, dismiss }) {
  return (
    <Portal id="modal-container">
      <Styles
        onClick={e => {
          if (e.target.parentNode.id === 'modal-container') dismiss(e);
        }}
      >
        {children}
      </Styles>
    </Portal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  isShowing: PropTypes.bool
};
