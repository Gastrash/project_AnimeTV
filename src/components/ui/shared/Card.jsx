/* Card.jsx */

import Actions from "./Actions"

//refactor de clases, realizar versión con ActionsAnimeTV en vez de description.

export default function Card({
  variant = "default", //default, secondary
  size = "2", //1, 2, 3
  layout = "vertical", // horizontal(16:9), vertical(3:4)
  className,
  data = {} //cardImage, title, description.
}) {
  return (
    <article className={`card__container card--size-${size} card--layout-${layout}`}>
        <div className={`card card--variant-${variant} ${className}`} style={{ backgroundImage: `url(${data.cardImage})`}}>
            <div className={`card__meta`}>
                <h4>{data.title}</h4>
                <div className={`card__meta-hidden`}>
                  <Actions className={`card__actions`} size="1" data={data}/>
                </div>
            </div>
        </div>
    </article>
  )
} 

/*

<Card variant="default" size="1" layout="vertical" data=[data]/>

*/