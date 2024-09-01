import Navbar from '../components/Navbar/Navbar';
import Content from "../components/Content/Content"
import {useState,useEffect} from "react"
import './App.css'


function App() {


    return (
        <div className="app">
            <Navbar />
            <Content/>
        </div>
    )
}
export default App;