import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import Textarea from "../../common/Forms/FormsContols";

const maxLength10 = maxLength(10)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"PostText"} placeholder={"Post"} component={Textarea} validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({
    form: "Post"
})(PostForm)