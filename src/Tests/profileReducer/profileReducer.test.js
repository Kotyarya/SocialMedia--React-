import profileReducer, {addPostActionCreator, setProfile} from "../../Redux/Reducers/profileReducer";

const startState = {
    posts: [
        {id: 1, message: "Hi!", likeCount: 45},
        {id: 2, message: "its my first message", likeCount: 89},
    ],
    profile: null,
    authProfile: {
        login: null,
        id: null,
        email: null,
        isAuth: false
    },
    status: ""
}


test('Test: addPostActionCreator(length is correct)', () => {
    const action = addPostActionCreator("Hello")

    const resultState = profileReducer(startState, action)
    expect(resultState.posts.length).toBe(3)
});


test('Test: addPostActionCreator(new post is correct)', () => {
    const action = addPostActionCreator("Hello")

    const resultState = profileReducer(startState, action)
    expect(resultState.posts[resultState.posts.length - 1].message).toBe("Hello")
});


test('Test: setProfile(profile is correct)', () => {
    const profile = {
        login: "login",
        id: "id",
        email: "email",
        isAuth: true
    }


    const action = setProfile(profile)
    const resultState = profileReducer(startState, action)


    expect(resultState.profile).toStrictEqual({
        login: "login",
        id: "id",
        email: "email",
        isAuth: true
    })
});