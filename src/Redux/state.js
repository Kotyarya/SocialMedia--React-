import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state : {
        profilePage : {
            posts: [
                { id: 1, message: "Hi!", likeCount: 45 },
                { id: 2, message: "its my first message", likeCount: 89 },
            ],
            newPostText : ""
        },
        dialogsPage : {
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
    },


    //? ---------METHODS----------

    getState () {
        return this._state
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    },


    _callSubscriber() {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }


    //? --------------------------
}

export default store

window.store = store