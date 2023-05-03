import style from "../Profile.module.css";
import userPhoto from "../../../assets/img/userPhoto.png";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <>
            {/*<img className={style.bg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>*/}
            <h3>My posts</h3>
            <img className={style.photo} src={
                props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            } alt=""/>
            <h3>{props.profile.fullName}</h3>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </>
    )
}

export default ProfileInfo