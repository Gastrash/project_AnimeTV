// Home.jsx

import { Content, Hero } from "../components/layout";
import { dataAnime } from "../data";

export default function Home ({}) {
    const data = Object.values(dataAnime);
    return (
        <>
            <Hero data={data[1]}/>
            <Content data={data} />
            <Content data={data} />
            <Content data={data} />
        </>
    )
}