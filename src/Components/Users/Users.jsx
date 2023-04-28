import style from "./Users.module.css";
import userPhoto from "../../assets/img/userPhoto.png";
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    const searchUserRef = React.createRef()


    const onSearchUser = () => {
        let text = searchUserRef.current.value
        props.searchUser(text)
    }
    const onShowMoreUsers = () => {
        let text = searchUserRef.current.value
        props.showMoreUsers(text)
    }


    return (
        <>
            <div>
                <textarea className={style.textarea} ref={searchUserRef} onChange={onSearchUser} value={props.searchUserText}></textarea>
            </div>
            <div className={style.container}>
            {
                props.users.length > 0
                    ? props.users.map(item => {
                        return (
                            <div key={item.id} className={style.block}>
                                <NavLink to={`/profile/` + item.id}>
                                    <img className={style.avatar} src={item.photos.small === null
                                      ? userPhoto
                                      : `${item.photos.small}`
                                  } alt=""/>
                                </NavLink>
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.status}</p>
                                </div>
                                {
                                    item.followed
                                        ? <button onClick={() => {
                                           props.unfollowAPI(item.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(item.id)
                                                    }
                                                })

                                        }}
                                        >Unfollow</button>
                                        : <button onClick={() => {
                                            props.followAPI(item.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(item.id)
                                                    }
                                                })
                                        }}
                                        >Follow</button>
                                }
                            </div>
                        )
                    })
                    : <p>No user</p>
            }
            </div>
            <button onClick={onShowMoreUsers}>More Users</button>
        </>
    )
}

export default Users