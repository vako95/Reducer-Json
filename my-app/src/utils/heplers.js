import { MOVIE_API_BASE_URL } from "./constants";

export const composeApiUrl = (route,api_key) => {

    const url = new URL(MOVIE_API_BASE_URL)
    url.pathname += route 
    return url.toString()
}







