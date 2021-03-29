import './App.css';
import PostContainer from "./components/Post/PostContainer";
import {NavLink, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import fs from 'fs'
import xml2js from 'xml2js'
import regions from './components/regions.xml'

let App = (props) => {
    // const fs = require('fs')
    // const xml2js = require('xml2js')
    const parser = new xml2js.Parser()

    fs.readFile(regions , (err, data) => {
        parser.parseString(data, (err, result) => {
            console.log(result)
        })
    })
    return <div>
        <NavLink to={'/login'}>Login </NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>

        <Route path='/login' render={ () => <Login />} />
        <Route path='/posts' render={ () => <PostContainer />} />
    </div>
}

export default App;
