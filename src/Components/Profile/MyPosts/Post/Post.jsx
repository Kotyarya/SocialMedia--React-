import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.block}>
            <span className={style.av}></span>
            <p className={style.item}>{props.message}</p>
        </div>
    )
}

export default Post