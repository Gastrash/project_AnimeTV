//layout/sections/Footer.jsx

export default function Footer ({
    container = "none", //primary, secondary,
    data = []
}) {
    return (
        <footer id="footer">
            <div className={`footer ${container}`}>
                <small>&copy; 2026 AnimeTV. Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}