import {Field, reduxForm} from "redux-form";
import {FormInput} from "../common/Forms/FormsContols";
import {maxLength, minLength, required} from "../../utils/validators/validators";

const maxLength20 = maxLength(20)
const minLength5 = minLength(5)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"Email"} type="email" placeholder={"Email"} component={FormInput} validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} type="text" placeholder={"Password"} component={FormInput} validate={[required,maxLength20,minLength5]}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={FormInput}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: "Login"
})(LoginForm)