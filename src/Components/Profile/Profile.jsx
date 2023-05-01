import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
