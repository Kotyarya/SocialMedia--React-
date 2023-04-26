import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";

const Profile = (props) => {

    let params = useParams()
    console.log(params)

    return (
        <div className={style.main}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
