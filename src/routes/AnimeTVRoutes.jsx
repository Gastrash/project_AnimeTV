// AnimeTVRoutes.jsx

import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages";
import AnimeDetail from "../pages";
import Movies from "../pages";
import Series from "../pages";
import Favorites from "../pages";
import AnimePlayer from "../pages";

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