import style from "../Profile.module.css";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/img/userPhoto.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <img className={style.bg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>
            <h3>My posts</h3>
            <img className={style.photo} src={
                props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            } alt=""/>
            <h3>{props.profile.fullName}</h3>
            <p>{
                props.profile.aboutMe
                ? props.profile.aboutMe
                : "Description is empty"
            }</p>
        </>
    )
}

export default ProfileInfo