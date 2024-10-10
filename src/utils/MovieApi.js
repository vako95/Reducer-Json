import axios from 'axios';

import {composeApiUrl} from "./heplers"



class MoovieShow {
  static async FetchMovie(page){
    const response = await axios.get(composeApiUrl("movies")+`?_page=${page}&_per_page=12`)
    console.log(response)
    return response.data.data
    
  }
}
export default MoovieShow;
