// Favorites.jsx

import { Hero, Content } from "../components/layout";
import { dataAnime, dataAux } from "../data";

export default function Favorites ({}) {
    const data = Object.values(dataAnime);
    const id = 1;
    const Favorites = dataAux.favorites;
    return (
        <>
            <Hero data={Favorites[1]} />
            <Content title="Tus Favoritos" data={Favorites} />
            <Content title="Otros que podrian gustarte" data={data} />
            <Content data={data} />
        </>
    )
}