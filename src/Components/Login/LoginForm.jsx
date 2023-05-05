import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"Email"} type="email" placeholder={"Email"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} type="text" placeholder={"Password"} component={"input"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type="checkbox" component={"input"}/>
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