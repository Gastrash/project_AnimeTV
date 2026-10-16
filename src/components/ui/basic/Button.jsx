export default function Button({
  variant = "default", // default, secondary, danger, ghost, success
  size = "1", // 1, 2, 3
  layout = "", //square, full

  disabled = false,
  onClick,
  type = "button",
  className = "",
  icon,
  iconPosition = "left", //left, right
  children
}) {
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`btn
      btn--variant-${variant}
      btn--size-${size}
      btn--layout-${layout}
      type={type}
      ${className}`}>

      {icon && iconPosition === "left" && <span className="btn__icon">{icon}</span>}

      {children != null && <span className="btn__label">{children}</span>}

      {icon && iconPosition === "right" && <span className="btn__icon">{icon}</span>}

    </button>
  )
}

/*
pendiente: loading, onClick, fullWidth, href (a), events, accesibilidad (aria-*), forwardRef, style externa.
*/