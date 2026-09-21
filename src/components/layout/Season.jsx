//layout/sections/Season.jsx

/*

<select
    value={seasonPosition}
    onChange={(event) => setSeasonPosition(Number(event.target.value))}
>
    {data.seasons.map((season, index) => (
        <option key={season.number} value={index}>
            Temporada {season.number}
        </option>
    ))}
</select>

<List
    layout="grid"
    type="data"
    data={currentSeason?.episodes ?? []}
    renderItem={(item) => (
        <Card
            variant="default"
            size="2"
            layout="horizontal"
            data={item}
        />
    )}
/>

*/

import { useState } from "react";
import { Button, List, Card, Icon, NavDisplay } from "../ui"

export default function Season ({
    container = "container", //primary, secondary,
    data = {}
}) {
  const [seasonPosition, setPosition] = useState(0);
    return (
        <section id="season" className={`${container}`}>
            <div className="season">
                <div className="season__actions flex flex-row justify-flex-start">
                    <Button size="2" layout="split" variant="secondary" icon={<Icon name="arrow" rotate="270" />}>Temporada {seasonPosition + 1}</Button>
                </div>
                <div className="season__content">
                    <List
                    classUl="season__grid"
                    layout="grid"
                    type="data"
                    data={data}
                    renderItem={(item) => (
                        <Card 
                        variant="default"
                        size="2"
                        layout="horizontal"
                        data={item} />)}
                    />
                </div>
                <nav className="season__navigation flex flex-row justify-center align-center">
                    <NavDisplay className="season__display" data={data}/>
                </nav>
            </div>
        </section>
    )
}