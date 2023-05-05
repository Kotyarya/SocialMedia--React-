import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../Redux/Reducers/authReducer";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const submit = (value) => {
        props.loginUserThunkCreator(value.Email,value.password,value.rememberMe)
    }
    return  (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={submit}/>
        </>
    )
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps,{loginUserThunkCreator})(Login)