//layout/sections/Content.jsx

import { Carousel, Card } from "../ui";

/*
const shuffledData = [...contentData].sort(() => Math.random() - 0.5);
*/

export default function Content ({
    
    title = "Novedades para ti",
    container = "none", //primary, secondary,
    data = []
}) {
    return (
        <section id="content" className={`container--${container}`}>
            <div className="content">
                <div className="content__header">
                    <h3>{title}</h3>
                </div>
                <div className="content__viewport">
                    <Carousel
                        className="content__list"
                        layout="horizontal"
                        data={data}
                        renderItem={(item) => (
                            <Card
                                className="content__item"
                                variant="default"
                                size="3"
                                layout="horizontal"
                                data={item}
                            />
                        )}
                    />
                </div>
            </div>
        </section>
    )
}