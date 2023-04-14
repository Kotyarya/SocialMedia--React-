import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    return (
        <main className={style.main}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </main>
    )
};

export default Profile;
