//layout/sections/Hero.jsx

import { Badge, Actions } from "../ui";

/*
refactor a hero__overlay. ...
List type="data" para badges.
*/

export default function Hero ({
    container = "none", //primary, secondary,
    data = {} //heroImage, rating, ranking, title, description.
}) {
    return (
        <section id="hero" className={`container--${container}`}>
            <div className="hero">
                <div className="hero__image">
                    <img src={data.heroImage} alt={data.title}/>
                </div>
                <div className="hero__overlay flex flex-column justify-flex-end">
                        <div className="hero__info flex flex-column">
                            <div className="hero__info--badges flex flex-row">
                            <Badge size="2">{data.ranking}</Badge>
                            <Badge size="2" className="hero__badges">{data.rating}</Badge>
                        </div>
                            <h1 className="hero__title">{data.title}</h1>
                            <p className="">{data.description}</p>
                        </div>
                        <Actions className="hero__actions" size="2" data={data}/>
                </div>
            </div>
        </section>
    )
}