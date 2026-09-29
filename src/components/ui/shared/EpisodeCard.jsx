/* EpisodeCard.jsx */

export default function EpisodeCard({
  variant = "default", //default, secondary
  size = "2", //1, 2, 3
  className,
  data = {} //cardImage, title, description.
}) {
  return (
    <article className={`episodeCard__container episodeCard--layout episodeCard--size-${size}`}>
        <div className={`episodeCard episodeCard--variant-${variant} ${className}`} style={{ backgroundImage: `url(${data.cardImage})`}}>
            <div className={`episodeCard__meta`}>
                <h4>{data.title}</h4>
            </div>
        </div>
    </article>
  )
}