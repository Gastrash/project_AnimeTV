//layout/sections/Comments.jsx

import { List, CommentCard, Form, Button, Icon } from "../ui";

/*

refactor: comments__header, comments__main, comments__footer,

class="comments-actions flex flex-row justify-center align-center"

*/

export default function Comments ({
    container = "container", //primary, secondary,
    data = [] //comments[id]
}) {
    return (
        <section id="comment" className={`${container}`}>
            <div className="comment">
                <div className="comment__header flex flex-row justify-space-between align-center">
                    <h3>Comentarios</h3>
                    <p>{data.length}</p>
                </div>
                <div className="comment__main">
                    <List
                    layout="vertical"
                    type="data"
                    data={data}
                    renderItem={(item) => (
                        <CommentCard data={item}/>
                    )}
                    />
                </div>
                <div className="comment__footer flex flex-row justify-space-between align-center">
                    <Form className="comment__form" type="comment"/>
                    <List classUl="comment__list">
                        <Button 
                        layout="square"
                        variant="secondary"
                        icon={<Icon name="options" />}/>
                        <Button 
                        layout="square"
                        variant="secondary"
                        icon={<Icon name="options" />}/>
                        <Button 
                        layout="square"
                        variant="secondary"
                        icon={<Icon name="options" />}/>
                    </List>
                </div>
            </div>
        </section>
    )
}