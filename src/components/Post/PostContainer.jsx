import React from 'react'
import Post from "./Post";
import {setPost} from "../../reducers/postReducer";
import {connect} from "react-redux";
import {serverApi} from '../../API/Api'

class PostContainer extends React.Component {

    componentDidMount() {
        serverApi.getPost()
            .then(data => {
                this.props.setPost(data)
                console.log(data)
            });
        // console.log(this.props)
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
    setPost,
})(PostContainer)

export default connectPost