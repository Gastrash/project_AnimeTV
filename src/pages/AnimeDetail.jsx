// AnimeDetail.jsx

import { useParams } from "react-router-dom";
import { Content, Info, Season, Comments } from "../components/layout";
import { dataAnime } from "../data";

export default function AnimeDetail({}) {
  const { animeId } = useParams();
  console.log(animeId);
  const data = Object.values(dataAnime);
  const anime = Object.values(dataAnime).find(item => item.id == animeId);
  return (
    <>
      <Info data={anime} />
      {!data.isMovie && (<Season data={anime} />)}
      <Content data={data} />
      {data.isMovie && (<Comments data={anime.comments} />)}
    </>
  )
}