// AnimeTV

// layout
import { Header, Footer } from "../components/layout";
import '../styles/main.css';

// routes
import { AnimeTVRoutes } from "../routes";

export default function AnimeTV () {
    return (
        <>
            <Header />

            <main>
                <AnimeTVRoutes />
            </main>

            <Footer />
        </>
    )
}