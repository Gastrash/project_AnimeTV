import { useEffect, useState } from "react";
import { Button, List, Icon } from "../basic";

export default function Carousel({
    layout = "horizontal",
    className = "",
    data = [],
    renderItem
}) {
    const [position, setPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");

        const updateViewport = () => setIsMobile(mediaQuery.matches);

        updateViewport();
        mediaQuery.addEventListener("change", updateViewport);

        return () => mediaQuery.removeEventListener("change", updateViewport);
    }, []);

    const itemsPerPage = isMobile ? 2 : 4;
    const maxPosition = Math.max(
        0,
        Math.ceil(data.length / itemsPerPage) - 1
    );

    const currentPosition = Math.min(position, maxPosition);

    const isAtStart = currentPosition === 0;
    const isAtEnd = currentPosition === maxPosition;

    return (
        <div className="carousel flex flex-row justify-space-between align-center">
            <div className="carousel__display flex align-center flex-row justify-space-between">
                <Button
                    disabled={isAtStart}
                    onClick={() => setPosition(currentPosition - 1)}
                    icon={<Icon name="arrow2" rotate="180" />}
                    layout="full"
                    variant="none"
                    className="carousel__button carousel__button--left"
                />

                <div className="carousel__viewport">
                    <div
                        className="carousel__track"
                        style={{
                            transform: `translateX(-${currentPosition * 100}%)`
                        }}
                    >
                        <List
                            classUl={className}
                            layout={layout}
                            type="data"
                            data={data}
                            renderItem={renderItem}
                        />
                    </div>
                </div>

                <Button
                    disabled={isAtEnd}
                    onClick={() => setPosition(currentPosition + 1)}
                    icon={<Icon name="arrow2" />}
                    layout="full"
                    variant="none"
                    className="carousel__button carousel__button--right"
                />
            </div>
        </div>
    );
}