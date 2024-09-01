import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    movies: [],
    favorites: [],
}

const ContentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;;
        },
        setLike(state, action) {
            const movieID = action.payload
            const movie = state.movies.find((m) => m.id === movieID);

            if (movie) {
                if (movie.isLiked) {
                    movie.likes -= 1;
                    movie.isLiked = false;
                }
                else {
                    if (movie.isDisliked) {
                        movie.dislikes -= 1;
                        movie.isDisliked = false;
                    }
                    movie.likes += 1;
                    movie.isLiked = true;
                }
            }
        },
        setDislike(state, action) {
            const movieId = action.payload;
            const movie = state.movies.find((m) => m.id === movieId);
            if (movie) {
                if (movie.isDisliked) {
                    movie.dislikes -= 1;
                    movie.isDisliked = false;
                } else {
                    if (movie.isLiked) {
                        movie.likes -= 1;
                        movie.isLiked = false;
                    }
                    movie.dislikes += 1;
                    movie.isDisliked = true;
                }
            }
        },
        setFavorites(state, action) {
            const movieId = action.payload;
            const movie = state.movies.find((m) => m.id === movieId);
            if (movie) {
                movie.isFavorite = !movie.isFavorite;
                if (movie.isFavorite) {
                    state.favorites.push(movie);
                } else {
                    state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
                }
            }
        }

    },
   
})

export const { setMovies, setLike, setDislike, setFavorites } = ContentSlice.actions
export default ContentSlice.reducer