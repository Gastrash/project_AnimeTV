// Movies.jsx

import { Hero, Content } from "../components/layout";
import { dataPeliculas } from "../data";

export default function Movies ({}) {
    const data = Object.values(dataPeliculas);
    return (
        <>
            <Hero data={data[0]} />
            <Content data={data} />
            <Content data={data} />
            <Content data={data} />
        </>
    )
}