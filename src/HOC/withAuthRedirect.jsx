import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component) => {
    const ComponentRedirect = (props) => {
        let navigate = useNavigate()
        useEffect(() => {
            if (props.isAuth === false) {
                return navigate("/login")
            }
        })
        return <Component {...props} />
    }
        return connect(mapStateToProps)(ComponentRedirect)
}

