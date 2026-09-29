// Series.jsx

import { Hero, Content } from "../components/layout";
import { dataSeries } from "../data";

export default function Series ({}) {
    const data = Object.values(dataSeries);
    return (
        <>
            <Hero data={data[0]} />
            <Content data={data} />
            <Content data={data} />
            <Content data={data} />
        </>
    )
}