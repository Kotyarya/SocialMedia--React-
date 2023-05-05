import {Field, reduxForm} from "redux-form";
import React from "react";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"PostText"} component={"textarea"}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({
    form: "Post"
})(PostForm)