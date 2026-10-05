// Actions.jsx

import { Button, List, Icon } from "../basic";
import { useNavigate } from "react-router-dom";

export default function Actions ({
    className,
    size = "1",
    info = true,
    data = {}
    //cambiar like por lista, agregar ese nuevo icon, agregar list y completar actions.
}) {
    const navigate = useNavigate();
    return (
        <List classUl={`actions flex flex-row justify-center align-center ${className}`}>
            <Button onClick={() => navigate(`/animePlayer/${data.id}#media`)} size={size}>Empezar</Button>
            {info && (<Button onClick={() => navigate(`/anime/${data.id}#info`)} variant="secondary" size={size}>Más info</Button>)}
            <Button variant="secondary" layout="square" size={size} icon={<Icon name="heart" />}></Button>
            <Button variant="secondary" layout="square" size={size} icon={<Icon name="list" />}></Button>
        </List>
    )
}