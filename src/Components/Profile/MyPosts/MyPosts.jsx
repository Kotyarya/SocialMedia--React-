import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <>
            <textarea></textarea>
            <button>Add post</button>
            <Post message='Hi!'/>
            <Post message='its my first message'/>
            <Post/>
            <Post/>
            <Post/>
        </>

    )
};

export default MyPosts;
