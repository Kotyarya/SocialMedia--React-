const addPost = "addPost";
const updateNewPostText = "updateNewPostText";

const initialState = {
        posts: [
            { id: 1, message: "Hi!", likeCount: 45 },
            { id: 2, message: "its my first message", likeCount: 89 },
        ],
        newPostText : ""
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
        default:
            return state
    }

}




export  default profileReducer
export const addPostActionCreator = () => ({type : addPost})
export const updateNewPostTextActionCreator = (text) => ({type : updateNewPostText, newPostText: text})