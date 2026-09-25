// AnimeDetail.jsx

import { useParams } from "react-router-dom";
import { Content, Info, Season, Comments } from "../components/layout";
import { dataAnime, dataAux } from "../data";

export default function AnimeDetail({}) {
  const { animeId } = useParams();
  const episodes = dataAux.episodes;
  const data = Object.values(dataAnime);
  const anime = Object.values(dataAnime).find(item => item.id == animeId);
  const seasons = [1, 2, 3].map(seasonNumber => ({
    number: seasonNumber,
    episodes: episodes.filter(
      episodes => 
        episodes.animeId === Number(animeId) &&
        episodes.season === seasonNumber
  )
  }));
  console.log(seasons);
  return (
    <>
      <Info data={anime} />
      {!anime.isMovie && (<Season data={seasons} />)}
      <Content data={data} />
      {anime.isMovie && (<Comments data={anime.comments} />)}
    </>
  )
}