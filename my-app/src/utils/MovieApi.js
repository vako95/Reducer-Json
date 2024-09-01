import axios from 'axios';

import {composeApiUrl} from "./heplers"



class MoovieShow {
  static async FetchMovie(){
    const response = await axios.get(composeApiUrl("movies"))
    console.log(response)
    return response.data
    
  }
}
export default MoovieShow;
