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

    const itemsPerPage = 4;
    const maxPosition =
    Math.ceil(data.length / itemsPerPage) - 1;
    const isAtStart = position === 0;
    const isAtEnd = position === maxPosition;

    return (
        <>
            <div className="carousel flex flex-row justify-space-between align-center">
                <div className="carousel__viewport">
                  <div className="carousel__track" style={{transform:`translateX(-${position * 100}%)`}}>
                    <List classUl={className}
                      layout={layout}
                      type="data"
                      data={data}
                      renderItem={renderItem}>
                    </List>
                    </div>
                </div>
                <div className="carousel__button align-center flex-row justify-space-between">
                    <Button 
                        disabled={isAtStart}
                        onClick={() => setPosition(position - 1)}
                        layout="full"
                        variant="ghost" className="carousel__button--variant">
                    </Button>
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