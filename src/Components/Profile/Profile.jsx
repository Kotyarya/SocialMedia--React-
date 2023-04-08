import style from "./Profile.module.css"

let Profile = () => {
    return (
        <main className={style.main}>
            <img className={style.bg} src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>
            <p>ava + description</p>
            <p>My posts</p>
            <p>New posts</p>
            <p className={style.item}>post 1</p>
            <p>post 2</p>
        </main>
    )
};

export default Profile;
