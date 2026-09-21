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
                <div className="info__primary flex flex-column"> 
                    <div className="info__header flex flex-row justify-flex-start align-center">
                        <h1>{data.title}</h1>
                        <Badge id="type">{type}</Badge>
                    </div>
                    <div className="info__details flex flex-column justify-space-between">
                        <List classUl="info__badges">
                            {data.state && (<Badge>En emisión</Badge>)}
                            <Badge>Duración: {data.duration}</Badge>
                            <Badge>{data.classification}</Badge>
                        </List>
                        <div className="info__description">
                        <p>Descripcion: {data.description}</p>
                        </div>
                    </div>
                    <Actions data={data} className="info__actions"/>
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