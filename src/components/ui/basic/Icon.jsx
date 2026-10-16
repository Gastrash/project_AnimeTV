import icons from "./icons";

export default function Icon({
    name = "heart",
    
    rotate = "0"
    /*
    left = 0,
    top = 90,
    right = 180,
    bottom = 270 
    */
}) {
    const SelectedIcon = icons[name]

    if (!SelectedIcon) {
        return null
    }

    return (
        <SelectedIcon
            className={`icon icon--rotate-${rotate}`}
        />
    )
}