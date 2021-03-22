import {serverApi} from "../API/Api";

const SET_POST = 'SET_POST'

let initState = {
    post: [],
}

let postReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_POST: {
            return  {...state, post: action.post}
        }
        default: {
            return state;
        }

    }
}

export const setPost = (post) => ({type: SET_POST, post})

export const setPostThunkCreator = (setPost) => {
    return (dispatch) => {
        serverApi.getPost()
            .then(data => {
                setPost(data)
            });
    }
}

export default postReducer