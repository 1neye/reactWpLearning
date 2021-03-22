import React from 'react'
import Post from "./Post";
import {setPost, setPostThunkCreator} from "../../reducers/postReducer";
import {connect} from "react-redux";
import {serverApi} from '../../API/Api'

class PostContainer extends React.Component {

    componentDidMount() {
        this.props.setPostThunkCreator(this.props.setPost)
        // serverApi.getPost()
        //     .then(data => {
        //         this.props.setPost(data)
        //         console.log(data)
        //     });
    }

    render() {
        return <>
            <Post post = {this.props.post}/>
        </>
    }
}

const mapStateProps = (state) => {
    return {
        post: state.postPage.post
    }
}

const connectPost = connect(mapStateProps, {
    setPost, setPostThunkCreator
})(PostContainer)

export default connectPost