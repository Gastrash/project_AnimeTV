function Input({
  variant = "default", //default, secondary,
  size = "1", //1, 2, 3
  layout = "text", //text, textarea,
  placeholder = "texto predeterminado",
  iconPosition = "left", //left, right.
  required = true,
  type = "text",
  className = "",
  icon,
  children
}) {
  return (
    <div className={`input__container`}>
      {icon && iconPosition === "left" && <span className="field__icon">{icon}</span>}

      <input className={`input input--variant-${variant} input--size-${size} input--layout-${layout} ${className}`} type={type} placeholder={placeholder} required={required} />

      {icon && iconPosition === "right" && <span className="field__icon">{icon}</span>}
    </div>
  )
}

export default Input