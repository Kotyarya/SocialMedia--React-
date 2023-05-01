const addPost = "addPost";
const updateNewPostText = "updateNewPostText";
const SET_PROFILE = "SET_PROFILE";
const SET_AUTH_USER = "SET_AUTH_USER"


const initialState = {
        posts: [
            { id: 1, message: "Hi!", likeCount: 45 },
            { id: 2, message: "its my first message", likeCount: 89 },
        ],
        newPostText : "",
        profile: null,
        authProfile: {
            login: null,
            id : null,
            email : null,
            isAuth : false
        }
}


const profileReducer = (state = initialState,action) => {

    let stateCopy = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case addPost:
            let temp = stateCopy.posts
            let newPost = {
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: stateCopy.newPostText,
                likeCount: 0
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy;
        case updateNewPostText:
            stateCopy.newPostText = action.newPostText
            return stateCopy;
        case SET_PROFILE :
            stateCopy.profile = action.profile
            return stateCopy
        case SET_AUTH_USER:
            stateCopy.authProfile = {
                    ...action.data.data,
                    isAuth : true
                }
            return stateCopy;
        default:
            return state
    }

}




export  default profileReducer
export const addPostActionCreator = () => ({type : addPost})
export const updateNewPostTextActionCreator = (text) => ({type : updateNewPostText, newPostText: text})
export const setProfile = (profile) => ({type : SET_PROFILE, profile})
export const setAuthUser = (data) => ({type : SET_AUTH_USER, data})
