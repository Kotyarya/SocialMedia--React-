const updateNewMessageText = "updateNewMessageText"
const sendMessage = "sendMessage"


const initialState = {
        dialogs :[
            { id: 1, name: "User1" },
            { id: 2, name: "User2" },
            { id: 3, name: "User3" },
            { id: 4, name: "User4" },
            { id: 5, name: "User5" },
            { id: 6, name: "User6" },
        ],
        messages: [
            { id: 1, message: "Hello" },
            { id: 2, message: "Hi" },
            { id: 3, message: "Hey" },
            { id: 4, message: "Yo" },
            { id: 5, message: "GG" },
            { id: 6, message: "PRIVET BLYAT" },
        ],
        newMessageText : ""
}


export const dialogsReducer = (state = initialState, action) => {

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
export const sendMessageActionCreator = () => ({type : sendMessage})
export const updateNewMessageTextActionCreator = (text) => ({type : updateNewMessageText, newMessageText: text})