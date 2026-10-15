//layout/sections/Comments.jsx

import { List, CommentCard, Button, Input, Icon } from "../ui";

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
                <form className="comment__form flex flex-row justify-center align-center">
                    <Input className="comment__input" placeholder="comentar" required={true} />
                    <Button className="comment__btn--form" variant="secondary" size="3">Comentar</Button>
                </form>
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