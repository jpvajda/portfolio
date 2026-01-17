import React, { useState } from 'react';
// TODO Phase 3: Replace with Headless UI Dialog component

function MyModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn-light terminal-text px-4 py-2 border border-terminal-green rounded hover:bg-terminal-bg-tertiary"
        onClick={handleShow}
      >
        CONTACT
      </button>

      {show && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="modal-content terminal-window max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header flex justify-between items-center mb-4">
              <h3 className="terminal-text text-xl">Contact Me</h3>
              <button
                className="text-terminal-green hover:text-terminal-green-dim text-2xl"
                onClick={handleClose}
              >
                ×
              </button>
            </div>
            <div className="modal-body mb-4">
              Reach out to me on <a href="https://www.linkedin.com/in/johnpvajda/" className="terminal-text underline">Linkedin</a> to connect!
            </div>
            <div className="modal-footer flex justify-end">
              <button
                className="btn-secondary px-4 py-2 border border-terminal-text-secondary rounded hover:bg-terminal-bg-tertiary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default MyModal;