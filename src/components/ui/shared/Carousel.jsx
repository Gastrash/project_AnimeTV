// Carousel.jsx

import { useState } from "react";
import { Button, List } from "../basic";

/*

class para contenedor y para lista.

*/

export default function Carousel ({
    /*variant = "default",*/
    layout = "horizontal", // vertical
    className,
    data = [],
    renderItem
}) {
    const [position, setPosition] = useState(0);
    const isAtStart = position === 0;
    const isAtEnd = position === 1;

    return (
        <>
            <div className="carousel">
                <div className="carousel__button">
                    <Button 
                        disabled={isAtStart}
                        onClick={() => setPosition(position + 1)}
                        layout="full"
                        variant="ghost" className="carousel__button--variant">
                    </Button>
                </div>
                <List classUl={className}
                    layout={layout}
                    type="data"
                    data={data}
                    renderItem={renderItem}>
                </List>
                <div className="carousel__button">
                    <Button
                        disabled={isAtEnd}
                        onClick={() => setPosition(position + 1)}
                        layout="full" 
                        variant="ghost" className="carousel__button--variant">
                    </Button>
                </div>
            </div>
        </>
    )
}