import { episodes, comments, seasons } from "./index";

const content = [
      {
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
      {
        id: 2,
        media: "media3",
        cardImage: cardImage3,
        title: "Pelicula 67",
        duration: "1h 35m",
        classification: "+16",
        description: "está es la pelicula 67",
        heroImage: heroImage3,
        rating: "6.7/10",
        ranking: "6",
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
      {
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
];

export const dataSeries = content.filter(
    (item) => item.isMovie === false
);

export const dataPeliculas = content.filter(
    (item) => item.isMovie === true
);

export default content