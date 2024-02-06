const option = [
        "Pop",
        "Rock",
        "Hip hop",
        "Country",
        "Electronic",
        "R&B",
        "Jazz",
        "Classical",
        "Blues",
        "Latin",
        "Metal",
        "Folk",
        "Funk",
        "Reggae",
        "Soul",
        "World music",
        "Dance",
        "Soundtracks",
        "Opera",
        "Musical theatre",
        "Other",
      ]

const songValidationSchema = {
    title:{
        isString:{
            errorMessage:"title must be string."
        },
        notEmpty:{
            errorMessage:"title can't be empty."
        },
        isLength:{
            options:{
                min:2,
            },
            errorMessage:"titlt must be at list 2 charcter."
        },
    },
    artist:{
        isString:{
            errorMessage:"artist must be string."
        },
        notEmpty:{
            errorMessage:" artist can't be empty."
        },
        isLength:{
            options:{
                min:2,
            },
            errorMessage:"artist must be at list 2 charcter."
        },
    }
    ,
    album:{
        isString:{
            errorMessage:"album must be string."
        },
        notEmpty:{
            errorMessage:"albem can't be empty."
        },
        isLength:{
            options:{
                min:2,
            },
            errorMessage:"album must be at list 2 charcter."
        },
    },
    genre:{
        notEmpty:{
            errorMessage:"genre can't be empty."
        },
        isIn: {
            errorMessage: "Genre must be one of the following: Pop, Rock, Hip hop, ... Others",
            options: [option],
        },
          isString:{
            errorMessage:"genre must be string."
        },
        isLength:{
            options:{
                min:2,
            },
            errorMessage:"genre must be at list 2 charcter."
        },
    },
}

module.exports = {songValidationSchema};