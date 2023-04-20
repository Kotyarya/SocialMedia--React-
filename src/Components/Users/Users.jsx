import style from "./Users.module.css"

const Users = (props) => {


    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    fullName: "User1",
                    followed: false,
                    status: "Status1",
                    location: {city: "City1", country: "Country1"}
                },
                {
                    id: 2,
                    fullName: "User2",
                    followed: true,
                    status: "Status2",
                    location: {city: "City2", country: "Country2"}
                },
                {
                    id: 3,
                    fullName: "User3",
                    followed: false,
                    status: "Status3",
                    location: {city: "City3", country: "Country3"}
                },
                {
                    id: 4,
                    fullName: "User4",
                    followed: true,
                    status: "Status4",
                    location: {city: "City4", country: "Country4"}
                },
                {
                    id: 5,
                    fullName: "User5",
                    followed: true,
                    status: "Status5",
                    location: {city: "City5", country: "Country5"}
                },
                {
                    id: 6,
                    fullName: "User6",
                    followed: false,
                    status: "Status6",
                    location: {city: "City6", country: "Country6"}
                },
                {
                    id: 7,
                    fullName: "User7",
                    followed: true,
                    status: "Status7",
                    location: {city: "City7", country: "Country7"}
                },
                {
                    id: 8,
                    fullName: "User8",
                    followed: false,
                    status: "Status8",
                    location: {city: "City8", country: "Country8"}
                },
                {
                    id: 9,
                    fullName: "User9",
                    followed: true,
                    status: "Status9",
                    location: {city: "City9", country: "Country9"}
                },
            ])
    }


    return (
        <>
            <div className={style.container}>
                {props.users.map(item => {
                    return (
                        <div key={item.id} className={style.block}>
                            <div>
                                <p>{item.fullName}</p>
                                <p>{item.status}</p>
                            </div>
                            <div>
                                <p>{item.location.city}</p>
                                <p>{item.location.country}</p>
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