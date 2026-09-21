/* Button.jsx */

export default function Button({
  variant = "default", // default, secondary, danger, ghost, success, link,
  size = "1", // 1, 2, 3
  layout = "", //square, full

  disabled = false,
  onClick,

  className = "",
  icon,
  iconPosition = "left", //left, right
  children
}) {

  /* const validIconPosition = iconPosition === "right" ? "right" : "left" */

  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`btn
      btn--variant-${variant}
      btn--size-${size}
      btn--layout-${layout}
      ${className}`}>

      {icon && iconPosition === "left" && <span className="btn__icon">{icon}</span>}

      {children != null && <span className="btn__label">{children}</span>}

      {icon && iconPosition === "right" && <span className="btn__icon">{icon}</span>}

    </button>
  )
}

/*
pendiente: loading, onClick, fullWidth, href (a), events, accesibilidad (aria-*), forwardRef, className externa, style externa.

<Button variant="secondary" size="2" layout="icontext" icon={<Arrow />}>Siguiente</Button>

*/