import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "./withRouter";

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        id : state.auth.id
    }
}

export const withAuthProfileRedirect = (Component) => {
    const ComponentRedirect = (props) => {
        let navigate = useNavigate()
        useEffect(() => {
            if (props.params.userId === undefined && props.isAuth !== false) {
                return navigate(`/profile/${props.id}`)
            } else if (props.params.userId === undefined && props.isAuth === false) {
                return navigate(`/login`)
            }
        })
        return <Component {...props} />
    }
    return withRouter(connect(mapStateToProps)(ComponentRedirect))
}

