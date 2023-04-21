import React from "react";
import axios from "axios";
import style from "./Users.module.css"
import userPhoto from "../../assets/img/userPhoto.png"


class Users extends React.Component {
    constructor(props) {
        super(props);
        this.pageCount = 1
        this.searchUserRef = React.createRef()
    }
    componentDidMount() {
        this.getUsers(this.pageCount,8,'',this.props.setUsers)
    }


    getUsers = (page,count,term,callBackFunc) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}&term=${term}`)
            .then(response => {
                callBackFunc(response.data.items)
            })
    }


    showMoreUsers = () => {
        this.pageCount++
        this.getUsers(this.pageCount,8,"",this.props.showMoreUsers)
    }


    searchUser = () => {
        let text = this.searchUserRef.current.value
        this.props.searchUserUpdateText(text)
        this.getUsers(1,8,text,this.props.setUsers)
        if (text === "") {
            this.componentDidMount()
        }
    }


    render() {
        return (
            <>
                <div>
                    <textarea className={style.textarea} ref={this.searchUserRef} onChange={this.searchUser} onBlur={() => this.getUsers(1,8,'',this.props.setUsers)} value={this.props.searchUserText}></textarea>
                </div>

                <div className={style.container}>
                    {this.props.users.map(item => {
                        return (
                        <div key={item.id} className={style.block}>
                            <img className={style.avatar} src={item.photos.small === null
                                    ? userPhoto
                                    : `${item.photos.small}`
                            } alt=""/>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.status}</p>
                            </div>
                            {
                                item.followed
                                    ? <button onClick={() => this.props.unfollow(item.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(item.id)}>Follow</button>
                            }
                        </div>
                        )
                    })
                    }
                 </div>
                <button onClick={() => this.showMoreUsers()}>More Users</button>
            </>
        )
    }
}



export default Users