import {profileAPI} from "../../API/API";

const addPost = "addPost"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"


const initialState = {
    posts: [
        { id: 1, message: "Hi!", likeCount: 45 },
        { id: 2, message: "its my first message", likeCount: 89 },
    ],
    profile: null,
    status: ""
}


const profileReducer = (state = initialState,action) => {

    let stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case addPost:
            let temp = stateCopy.posts
            let newPost = {
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: action.text,
                likeCount: 0
            }
            stateCopy.posts.push(newPost)
            return stateCopy
        case SET_PROFILE :
            stateCopy.profile = action.profile
            return stateCopy
        case SET_STATUS:
            stateCopy.status = action.status
            return stateCopy
        default:
            return state
    }

}




export  default profileReducer
export const addPostActionCreator = (text) => ({type : addPost , text})
export const setProfile = (profile) => ({type : SET_PROFILE, profile})
export const setStatus = (status) => ({type : SET_STATUS, status})

export const setProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.setProfile(userId)
        .then(response => {
            dispatch(setProfile(response))
        })
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
                dispatch(setStatus(response))
        })
}

export const updateStatusThinkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    dispatch(setStatus(status))
}