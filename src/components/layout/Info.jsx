//layout/sections/Info.jsx

import { List, Badge, Actions } from "../ui";

export default function Info ({
    container = "container", //primary, secondary,
    data = [] //title, isMovie, state(en emisión), duration, classification, description, trailer.
}) {
    const type = data.isMovie ? "Pelicula" : "Serie";
    return (
        <section id="info" className={`${container}`}>
            <div className="info flex flex-row">
                <div className="info__image">
                    <img src={data.heroImage} alt={data.title}/>
                </div>
                <div className="info__primary flex flex-column justify-space-between align-flex-start"> 
                    <div className="info__header flex flex-column justify-flex-start align-flex-start">
                        <h1>{data.title}</h1>
                        <List classUl="info__badges">
                            <Badge id="type">{type}</Badge>
                            <Badge>Duración: {data.duration}</Badge>
                            <Badge>{data.classification}</Badge>
                            {data.state && (<Badge>En emisión</Badge>)}
                        </List>
                    </div>
                    <div className="info__description flex flex-column justify-flex-start align-flex-start">
                        <p>Descripcion: {data.description}</p>
                    </div>
                    <Actions data={data} size="2" className="info__actions"/>
                </div>
                <div className="info__secondary flex flex-column justify-center align-center">
                    <video className="info__trailer" controls>
                        <source src={data.trailer} type="video/mp4"/>
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
        </section>
    )
}