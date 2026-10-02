// Modal.jsx

import { createPortal } from "react-dom";

export default function Modal ({
  className = "",
  layout = "short", //short, medium, large
  blur = false,
  isOpen,
  onClose,
  children
}) {
    if (!isOpen) return null;
        return createPortal (
          <dialog className={`modal open ${blur ? "blur" : ""} flex flex-column justify-center align-center`} open onClick={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}>
            <div className={`modal__container modal__container--layout-${layout} ${className} flex justify-center align-center`}>
              {children}
            </div>
          </dialog>,
          document.body
          )
}

/*
<button onClick={() => setOpen(true)}>Abrir modal</button>
*/