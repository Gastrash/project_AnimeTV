// Badge.jsx

export default function Badge ({
    variant = "default",
    size = "1",
    icon,
    iconPosition = "right", //left, right
    children
}) {
    return (
        <span className={`badge inline-flex badge--variant-${variant} badge--size-${size}`}>
            {icon && iconPosition === "left" && <span className="btn__icon">{icon}</span>}

            {children != null && <span className="badge__label">{children}</span>}

            {icon && iconPosition === "right" && <span className="btn__icon">{icon}</span>}
        </span>
    )
}