// AnimePlayer.jsx

import { useParams } from "react-router-dom";
import { Info, Media, Content, Comments } from "../components/layout";
import { dataAnime } from "../data";

export default function AnimePlayer ({}) {
    const { animeId } = useParams();
    console.log(animeId);
    const data = Object.values(dataAnime);
    const anime = Object.values(dataAnime).find(item => item.id == animeId);
    return (
        <>
            <Info data={anime} />
            <Media data={anime} />
            <Content title="Algunos relacionados con {}" data={data} />
            <Comments data={anime.comments} />
        </>
    )
}