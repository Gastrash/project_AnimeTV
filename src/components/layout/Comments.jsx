//layout/sections/Comments.jsx

import { List, CommentCard, Form, Button, Input, Icon } from "../ui";

/*

refactor: comments__header, comments__main, comments__footer,

class="comments-actions flex flex-row justify-center align-center"

*/

export default function Comments ({
    container = "none", //primary, secondary,
    data = [] //comments[id]
}) {
    return (
        <section id="comment" className={`${container}`}>
            <div className="comment">
                <div className="comment__header flex flex-row justify-space-between align-center">
                    <h3>Comentarios</h3>
                    <p>{data.length}</p>
                </div>
                <Form className="comment__form flex flex-row justify-center align-center" type="comment">
                        <Input className="comment__input" placeholder="comentar" required={true} />
                        <Button className="comment__btn--form" variant="secondary" size="3">Comentar</Button>
                </Form>
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
                </div>
            </div>
        </section>
    )
}