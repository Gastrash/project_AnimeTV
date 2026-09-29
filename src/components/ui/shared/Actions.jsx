// Actions.jsx

import { Button, List, Icon } from "../basic";

export default function Actions ({
    className,
    size = "1",
    info = true,
    data = {}
    //cambiar like por lista, agregar ese nuevo icon, agregar list y completar actions.
}) {
    return (
        <List classUl={`actions flex flex-row justify-center align-center ${className}`}>
            <Button size={size}>Empezar</Button>
            {info && (<Button variant="secondary" size={size}>Más info</Button>)}
            <Button variant="secondary" layout="square" size={size} icon={<Icon name="heart" />}></Button>
            <Button variant="secondary" layout="square" size={size} icon={<Icon name="list" />}></Button>
        </List>
    )
}