// CommentCard.jsx

import { Button, Icon, List, Badge } from "../basic";

/*
  var user.
*/

export default function CommentCard ({
  /*variant = "default",
  layout = "default",*/
  data = {}
}) {
    const user = data.user;
    return (
      <div className="commentCard flex flex-column justify-center align-center">
          <div className="commentCard__header flex flex-row justify-flex-start">
              <div className="commentCard__avatar">
                  <img src={user.avatar} alt={`Avatar de ${user.username}`}/>
              </div>
              <h4>{user.username}</h4>
          </div>
          <div className="commentCard__main">
              <p>{data.content}</p>
          </div>
          <div className="commentCard__footer flex flex-row justify-space-between align-center">
              <div className="commentCard__info flex flex-row justify-center align-center">
                  <Badge icon={<Icon name="like" />}>{data.reactions.likes}</Badge>
                  <Badge icon={<Icon name="like" rotate="180"/>}>{data.reactions.dislikes}</Badge>
              </div>
              <List classUl="commentCard__actions">
                      <Button 
                    layout="square" 
                    variant="secondary"
                    icon={<Icon name="like"/>}/>
                      <Button 
                    layout="square" 
                    variant="secondary"
                    icon={<Icon name="like" rotate="180"/>}/>
                      <Button 
                    layout="square" 
                    variant="secondary"
                    icon={<Icon name="options"/>}/>
              </List>
          </div>
    </div>
    )
}