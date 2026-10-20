import { createPortal } from "react-dom";

export default function Modal ({
  className = "",
  name,
  blur = false,
  isOpen,
  onClose,
  children
}) {
  return createPortal (
    <div className={[
          "modal",
          `${name}__modal`,
          `${className}`,
          isOpen ? "open" : "",
          blur ? "blur" : ""
      ].filter(Boolean).join(" ")}
      aria-hidden={!isOpen} onClick={(event) => {
      if (event.target === event.currentTarget) onClose?.();
    }}>
      {children}
    </div>,
    document.body
    )
}