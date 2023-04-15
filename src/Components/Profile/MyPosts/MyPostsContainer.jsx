import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/Reducers/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChanged = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }


    return <MyPosts updateNewPostText={onPostChanged} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer;