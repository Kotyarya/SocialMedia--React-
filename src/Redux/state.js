const store = {
    _state : {
        profilePage : {
            posts: [
                { id: 1, message: "Hi!", likeCount: 45 },
                { id: 2, message: "its my first message", likeCount: 89 },
            ],
            newPostText : ""
        },
        messagesPage : {
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
            ]
        }
    },


    //? ---------METHOD----------

    getState () {
        return this._state
    },
    _callSubscriber() {
        console.log('Changed')
    },
    addPost (postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 6
        }
        this._state.profilePage.newPostText = ""
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    },

    //? --------------------------
}






export default store

window.store = store