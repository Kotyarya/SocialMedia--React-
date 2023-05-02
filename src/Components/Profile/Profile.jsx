import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Profile = (props) => {



    let navigate = useNavigate()
    useEffect(() => {
        if (!props.isAuth) {

            return  navigate("/login")
        }
    })

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
