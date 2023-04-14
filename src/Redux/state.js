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
        console.log('Changed')
    },
    dispatch(action) {
        if (action.type === addPost) {
            let temp = this._state.profilePage.posts
            let newPost = {
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.newPostText = ""
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === updateNewPostText) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === updateNewMessageText) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        } else if (action.type === sendMessage) {
            const body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ""
            let temp = this._state.dialogsPage.messages
            this._state.dialogsPage.messages.push({
                id: parseInt(temp[temp.length - 1].id) + 1,
                message: body
            })
            this._callSubscriber(this._state)
        }
    }


    //? --------------------------
}

const addPost = "addPost";
const updateNewPostText = "updateNewPostText";
const updateNewMessageText = "updateNewMessageText"
const sendMessage = "sendMessage"


export const addPostActionCreator = () => ({type : addPost})
export const updateNewPostTextActionCreator = (text) => ({type : updateNewPostText, newPostText: text})
export const sendMessageActionCreator = () => ({type : sendMessage})
export const updateNewMessageTextActionCreator = (text) => ({type : updateNewMessageText, newMessageText: text})



export default store

window.store = store