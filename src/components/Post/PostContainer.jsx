import React from 'react'
import Post from "./Post";
import {setPost, setPostThunkCreator} from "../../reducers/postReducer";
import {connect} from "react-redux";
import {serverApi} from '../../API/Api'
import {Redirect} from "react-router-dom";

class PostContainer extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.setPostThunkCreator(this.props.setPost)
        // serverApi.getPost()
        //     .then(data => {
        //         this.props.setPost(data)
        //         console.log(data)
        //     });
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <>
            <Post post = {this.props.post}
            // isAuth = {this.props.isAuth}
            />
        </>
    }
}

const mapStateProps = (state) => {
    return {
        post: state.postPage.post,
        isAuth: state.postPage.isAuth
    }
}

const connectPost = connect(mapStateProps, {
    setPost, setPostThunkCreator
})(PostContainer)

export default connectPost