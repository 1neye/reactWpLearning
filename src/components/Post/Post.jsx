import React from 'react'
import {NavLink} from "react-router-dom";

let Post = (props) => {
    console.log(props)
    return <div>
        {props.post.map((m) => <div key={m.id}>
            <NavLink to={'/PostPage'}>
                <h1>{m.title.rendered}</h1>
            </NavLink>
        </div>)}
    </div>
}

export default Post