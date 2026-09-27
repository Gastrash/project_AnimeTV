//layout/sections/Media.jsx

import { List, Button, Icon } from "../ui";

/*
terminar video.

{!isMovie && ()}

datos: video, isMovie.

<video className="media__video" controls> 
                        <source src="assets/image/img-01.jpeg" type="image/jpeg"/>
                        Tu navegador no soporta la reproducción de videos.
                    </video>
*/

export default function Media ({
    container = "none", //primary, secondary,
    data = {}
}) {
    return (
        <section id="media" className={`${container}`}>
            <div className="media flex flex-column justify-center align-center">
                <div className="media__viewer flex flex-column justify-center align-center">
                    <img className="media__video" src={data.cardImage} alt={data.title} />
                </div>
                <div className="media__footer flex flex-column justify-flex-start align-center">
                    <div className="media__actions flex flex-row justify-center align-center">
                        <List classUl="media__actions-list">
                            <Button size="1" variant="secondary" layout="icontext" icon={<Icon name="download" />}>Descargar</Button>
                            <Button size="1" variant="secondary" layout="icontext" icon={<Icon name="share" />}>Compartir</Button>
                            <Button size="1" variant="secondary" layout="icontext" icon={<Icon name="like" />}>Me gusta</Button>
                        </List>
                    </div>
                </div>
                {!data.isMovie && (<nav className="media__serieNav flex flex-row">
                    <List classUl="media__serieNav-list">
                        <Button size="3"
                        layout="square"
                        variant="secondary" className="media__btn-nav-primary"
                        icon={<Icon name="arrow" />}>
                            <div className="btn__content">
                                <p>ANTERIOR</p>
                                <p>Cap. 35</p>
                            </div>
                        </Button>
                        <Button size="3"
                        layout="square"
                        variant="secondary"
                        icon={<Icon name="episodes" />}>
                        </Button>
                        <Button size="3"
                        layout="square"
                        variant="secondary" className="media__btn-nav-secondary"
                        icon={<Icon name="arrow" rotate="180" />}>
                            <div className="media__btn-content">
                                <p>SIGUIENTE</p>
                                <p>Cap. 37</p>
                            </div>
                        </Button>
                    </List>
                </nav>)}
            </div>
        </section>
    )
}