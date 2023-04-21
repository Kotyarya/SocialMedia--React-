import style from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/img/userPhoto.png"

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })


    }

    return (
        <>
            <div className={style.container}>
                {props.users.map(item => {
                    return (
                        <div key={item.id} className={style.block}>
                            <img className={style.avatar} src={
                                item.photos.small === null
                                    ? userPhoto
                                    : `${item.photos.small}`
                            } alt=""/>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.status}</p>
                            </div>
                            {
                                item.followed
                                    ? <button onClick={() => props.unfollow(item.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(item.id)}>Follow</button>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default Users