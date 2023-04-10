import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={style.main}>
            <img className={style.bg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>
            <p>ava + description</p>
            <MyPosts/>
        </main>
    )
};

export default Profile;
