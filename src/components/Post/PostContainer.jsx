import React from 'react'
import Post from "./Post";
import {setPost} from "../../reducers/postReducer";
import {connect} from "react-redux";
import * as axios from 'axios';

class PostContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://reactwp/wp-json/wp/v2/posts/`)
            .then(response => {
                this.props.setPost(response.data)
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