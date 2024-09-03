import { configureStore } from "@reduxjs/toolkit";
import ContentReducer from "./ContentReducer/ContentReducer";

const store =  configureStore({
    reducer:{
        content:ContentReducer
    }
     
})
export default store;