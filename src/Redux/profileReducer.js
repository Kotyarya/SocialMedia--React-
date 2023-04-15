const addPost = "addPost";
const updateNewPostText = "updateNewPostText";
export const addPostActionCreator = () => ({type : addPost})
export const updateNewPostTextActionCreator = (text) => ({type : updateNewPostText, newPostText: text})
const profileReducer = (state,action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case addPost:
            let temp = state.posts
            let newPost = {
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: state.newPostText,
                likeCount: 0
            }
            state.newPostText = ""
            state.posts.push(newPost)
            return state;
        case updateNewPostText:
            state.newPostText = action.newPostText
            return state;
        default:
            return state
    }

}

export  default profileReducer