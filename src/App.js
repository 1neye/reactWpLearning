import './App.css';
import PostContainer from "./components/Post/PostContainer";
import {NavLink, Route} from "react-router-dom";
import Login from "./components/Login/Login";

let App = (props) => {
    return <div>
        <NavLink to={'/login'}>Login </NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>

        <Route path='/login' render={ () => <Login />} />
        <Route path='/posts' render={ () => <PostContainer />} />
    </div>
}

export default App;
