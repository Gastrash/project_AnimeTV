// dataAnime.js

/*
datos de pelicula:
video: "./assets/movie/video2315.mp4",
    cardImage: "./assets/cardImage/image2315.jpg",
    title: "Pelicula 2315",
    duration: "1h 35m",
    classification: "+16",
    description: "está es la pelicula 2315",
    heroImage: "./assets/heroImage/image2315.jpg",
    rating: "7.5/10",
    ranking: "no disponible",
    trailer: "./assets/trailerPeli/video2315.mp4",
    isMovie: true,
    comments

datos de serie:


{
    title: "...",
    comments: [...],
    season: [
        {
            number: 1,
            episodes: [...]
        },
        {
            number: 2,
            episodes: [...]
        }
    ]
}

{!data.isMovie && (
  <SeasonAnimeTV data={data.season} />
)}

- temporadas por id.
 
// userAvatar, cardImage, heroImage, trailer, media.

*/

import cardImage1 from "../assets/dataAnime/cardImage/cardImage1.jpg";
import cardImage2 from "../assets/dataAnime/cardImage/cardImage2.jpg";
import cardImage3 from "../assets/dataAnime/cardImage/cardImage3.jpg";
import heroImage1 from "../assets/dataAnime/heroImage/heroImage1.jpg";
import heroImage2 from "../assets/dataAnime/heroImage/heroImage2.jpg";
import heroImage3 from "../assets/dataAnime/heroImage/heroImage3.jpg";
import userAvatar1 from "../assets/dataAnime/userAvatar/userAvatar1.jpg";
import userAvatar2 from "../assets/dataAnime/userAvatar/userAvatar2.jpg";
import userAvatar3 from "../assets/dataAnime/userAvatar/userAvatar3.jpg";

const users = {
    1: {
        username: "user1",
        avatar: userAvatar1,
    },
    2: {
        username: "user2",
        avatar: userAvatar2,
    }
}

const comments = {
    2: {
        user: users[2],
        content: "borra la cuenta",
        createdAt: "Hace 17 años",
        reactions: {
            likes: 12,
            dislikes: 2
        }
    },
    111: {
        1: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        },
        2: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        },
        3: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    112: {
        1: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    121: {
        1: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    131: {
        1: {
            user: users[1],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    211: {
        1: {
            user: users[2],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    212: {
        1: {
            user: users[2],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    221: {
        1: {
            user: users[2],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    },
    231: {
        1: {
            user: users[2],
            content: "borra la serie",
            createdAt: "Hace 17 años",
            reactions: {
            likes: 12,
            dislikes: 2
            }
        }
    }
}

const dataContent = [
  {number: 1,},{number: 2,},{number: 3,},{number: 4,},{number: 5,},{number: 6,},{number: 7,},{number: 8,},{number: 9,},{number: 10,}, {number: 1,},{number: 2,},{number: 3,},{number: 4,},{number: 5,},{number: 6,},{number: 7,},{number: 8,},{number: 9,},{number: 10,}
]

const episodes = [
    {
        animeId: 1,
        season: 1,
        cardImage: cardImage1,
        media: "media1",
        duration: "25min",
        title: "episodio 1 de serie 1",
        description: "xddd",
        comments: comments[111]
    },
    {
        animeId: 1,
        season: 1,
        cardImage: cardImage1,
        media: "media1",
        duration: "26min",
        title: "episodio 2 de serie 1",
        description: "xdd",
        comments: comments[112]
    },
    {
        animeId: 1,
        season: 2,
        cardImage: cardImage1,
        media: "media1",
        duration: "25min",
        title: "episodio 2 de serie 1",
        description: "xd",
        comments: comments[121]
    },
    {
        animeId: 1,
        season: 3,
        cardImage: cardImage1,
        media: "media1",
        duration: "25min",
        title: "episodio 3 de serie 1",
        description: "xd",
        comments: comments[131]
    },
    {
        animeId: 3,
        season: 1,
        cardImage: cardImage2,
        media: "media2",
        duration: "25min",
        title: "episodio 1 de serie 1",
        description: "xddd",
        comments: comments[211]
    },
    {
        animeId: 3,
        season: 1,
        cardImage: cardImage2,
        media: "media2",
        duration: "26min",
        title: "episodio 2 de serie 1",
        description: "xdd",
        comments: comments[212]
    },
    {
        animeId: 3,
        season: 2,
        cardImage: cardImage2,
        media: "media2",
        duration: "25min",
        title: "episodio 2 de serie 1",
        description: "xd",
        comments: comments[221]
    },
    {
        animeId: 3,
        season: 3,
        cardImage: cardImage2,
        media: "media2",
        duration: "25min",
        title: "episodio 3 de serie 1",
        description: "xd",
        comments: comments[231]
    }
    
]

const seasons = [
    {
        id: 1,
        seasons: 3
    },
    {
        id: 3,
        seasons: 3
    }
]

const dataAnime = {
  1: {
    id: 1,
    cardImage: cardImage1,
    title: "serie 1",
    duration: "3 Temporadas",
    classification: "+16",
    description: "está es la serie 1",
    heroImage: heroImage1,
    rating: "7/10",
    ranking: "no disponible",
    trailer: "trailer1",
    state: false,
    isMovie: false,
    seasons: seasons[1]
  },
  2: {
    id: 2,
    media: "media3",
    cardImage: cardImage3,
    title: "Pelicula 3477",
    duration: "1h 35m",
    classification: "+16",
    description: "está es la pelicula 3477",
    heroImage: heroImage3,
    rating: "7.5/10",
    ranking: "no disponible",
    trailer: "trailer3",
    isMovie: true,
    comments: 
    [
    {    
        user: users[1],
        content: "borra la serie",
        createdAt: "Hace 17 años",
        reactions: {
            likes: 12,
            dislikes: 2
        }
    },
    {
        user: users[1],
        content: "borra la serie",
        createdAt: "Hace 17 años",
        reactions: {
            likes: 12,
            dislikes: 2
        }
    },
    {
        user: users[1],
        content: "borra la serie",
        createdAt: "Hace 17 años",
        reactions: {
            likes: 12,
            dislikes: 2
        }
    }
    ]
  },
  3: {
    id: 3,
    cardImage: cardImage2,
    title: "serie 3",
    duration: "3 Temporadas",
    classification: "+16",
    description: "está es la serie 3",
    heroImage: heroImage2,
    rating: "8.5/10",
    ranking: "no disponible",
    trailer: "trailer2",
    state: false,
    isMovie: false,
    seasons: seasons[3]
  }
}

export const dataAux = {
    users, comments, episodes, seasons, dataContent
}

export const dataSeries = Object.values(dataAnime).filter(
    (item) => item.isMovie === false
);

export const dataPeliculas = Object.values(dataAnime).filter(
    (item) => item.isMovie === true
);

export default dataAnime