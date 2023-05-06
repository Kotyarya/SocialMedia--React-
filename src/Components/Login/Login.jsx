import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../Redux/Reducers/authReducer";
import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Login = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth) {
            navigate("/profile")
        }
    },[props.isAuth,navigate])

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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{loginUserThunkCreator})(Login)