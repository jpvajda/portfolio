import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="accent-button"
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
                    <DialogTitle
                      id="contact-dialog-title"
                      className="font-sans text-xl font-semibold text-terminal-text-primary"
                    >
                      Contact Me
                    </DialogTitle>
                    <button
                      className="text-terminal-text-secondary hover:text-terminal-green text-2xl leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green rounded-sm"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close dialog"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-4 text-terminal-text-secondary font-sans">
                    Reach out to me on{" "}
                    <a
                      href="https://www.linkedin.com/in/johnpvajda/"
                      className="text-terminal-green underline underline-offset-2 hover:text-terminal-text-primary transition-colors"
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
                      className="px-4 py-2 border border-white/15 rounded-md font-mono text-sm text-terminal-text-primary hover:border-terminal-green hover:text-terminal-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green"
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
