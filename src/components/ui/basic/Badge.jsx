export default function Badge ({
    variant = "default",
    size = "1",
    icon,
    iconPosition = "right", //left, right
    className,
    children
}) {
    return (
        <span className={`badge inline-flex badge--variant-${variant} badge--size-${size} ${className}`}>
            {icon && iconPosition === "left" && <span className="badge__icon">{icon}</span>}

            {children != null && <span className="badge__label">{children}</span>}

            {icon && iconPosition === "right" && <span className="badge__icon">{icon}</span>}
        </span>
    )
}