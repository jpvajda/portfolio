import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="btn-light terminal-text px-4 py-2 border border-terminal-green rounded hover:bg-terminal-bg-tertiary transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open contact dialog"
      >
        CONTACT
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
          aria-labelledby="contact-dialog-title"
        >
          {/* Backdrop with fade transition */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Dialog panel with scale + fade transition */}
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="terminal-window max-w-lg w-full transform transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <DialogTitle id="contact-dialog-title" className="terminal-text text-xl font-bold">
                      Contact Me
                    </DialogTitle>
                    <button
                      className="text-terminal-green hover:text-terminal-green-dim text-2xl transition-colors"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close dialog"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-4 text-terminal-text-primary">
                    Reach out to me on{" "}
                    <a
                      href="https://www.linkedin.com/in/johnpvajda/"
                      className="terminal-text underline hover:text-terminal-green-dim transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit John P. Vajda's LinkedIn profile (opens in new tab)"
                    >
                      LinkedIn
                    </a>{" "}
                    to connect!
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 border border-terminal-text-secondary rounded hover:bg-terminal-bg-tertiary text-terminal-text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MyModal;
