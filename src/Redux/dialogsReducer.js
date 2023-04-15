const updateNewMessageText = "updateNewMessageText"
const sendMessage = "sendMessage"
export const sendMessageActionCreator = () => ({type : sendMessage})
export const updateNewMessageTextActionCreator = (text) => ({type : updateNewMessageText, newMessageText: text})

export const dialogsReducer = (state,action) => {

    switch (action.type) {
        case updateNewMessageText:
            state.newMessageText = action.newMessageText
            return state;
        case sendMessage:
            const body = state.newMessageText
            state.newMessageText = ""
            let temp = state.messages
            state.messages.push({
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: body
            })
            return state;
        default:
            return state
    }

}

export default dialogsReducer