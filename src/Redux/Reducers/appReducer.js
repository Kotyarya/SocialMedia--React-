import {setAuthUserThunkCreator} from "./authReducer";

const INITIALIZE = "INITIALIZE"


const initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case INITIALIZE:
            stateCopy.initialize = true
            return stateCopy;
        default:
            return state
    }
}

export default appReducer
export const initialize = () => ({type: INITIALIZE})


export const initializeThunkCreator = () => (dispatch) => {
    let promise = dispatch(setAuthUserThunkCreator())
    Promise.all([promise]).then(
        () => dispatch(initialize())
    )
}
