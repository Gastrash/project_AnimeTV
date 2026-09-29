// Modal.jsx

import { useState } from "react";
import { createPortal } from "react-dom";

export default function Modal ({
  className = "",
  Open = false,
  Close,
  children
}) {
    const [isOpen, setOpen] = useState(false);
        return (
          <dialog className={`modal ${isOpen ? "open" : "close"}`} open={Open} id="modal">
            <div className={`modal__container ${className} flex justify-center align-center`}>
              {children}
            </div>
          </dialog>,
          document.body
          )
}

/*
<button onClick={() => setOpen(true)}>Abrir modal</button>
*/