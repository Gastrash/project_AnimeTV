// NavDisplay.jsx

import { Button, List, Icon } from "../basic";

export default function NavDisplay ({
    className,
    data = {}
}) {
    return (
        <List classUl={className}>
            <Button
                size="2"
                layout="square"
                variant="secondary"
                icon={<Icon name="arrow" />}/>
            <List
                data={data}
                type="data"
                classUl="navDisplay__display"
                renderItem={(item) => (
                    <Button
                        size="1" className=" navDisplay__dot"></Button>
                    )}>
            </List>
            <Button
                size="2"
                layout="square"
                variant="secondary"
                icon={<Icon name="arrow" rotate="180" />}/>
        </List>
    )
}