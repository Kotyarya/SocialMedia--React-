import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../utils/validators/validators";
import {Formtextarea} from "../common/Forms/FormsContols";

const maxLength100 = maxLength(100)

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field  name={"MessageText"} component={Formtextarea} validate={[required, maxLength100]} placeholder={"Write Message"}/>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({
    form: "Message"
})(DialogsForm)