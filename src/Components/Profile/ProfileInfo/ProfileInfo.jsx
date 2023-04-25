import style from "../Profile.module.css";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <img className={style.bg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>
            <h3>My posts</h3>
            <img src={props.profile.photos.large} alt=""/>
            <p>ava + description</p>
        </>
    )
}

export default ProfileInfo