import {Field, reduxForm} from "redux-form";
import React from "react";

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"MessageText"} component={"textarea"} placeholder={"Write Message"}/>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({
    form: "Message"
})(DialogsForm)