import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {Formtextarea} from "../../common/Forms/FormsContols";

const maxLength50 = maxLength(50)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"PostText"} placeholder={"Post"} component={Formtextarea} validate={[required, maxLength50]}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({
    form: "Post"
})(PostForm)