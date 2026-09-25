// AnimeTVRoutes.jsx

import { Routes, Route } from "react-router-dom";

// pages
import { Home, AnimeDetail, Movies, Series, Favorites, AnimePlayer } from "../pages";

export default function AnimeTVRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:animeId" element={<AnimeDetail />} />
            <Route path="/animePlayer/:animeId" element={<AnimePlayer />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/series" element={<Series />}/>
            <Route path="/favorites" element={<Favorites />}/>
        </Routes>
    )
}