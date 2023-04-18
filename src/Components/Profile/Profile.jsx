import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={style.main}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    )
};

export default Profile;
