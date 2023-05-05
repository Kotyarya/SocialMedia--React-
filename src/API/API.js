import axios from "axios";

const initial = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    crossDomain: true,
    headers: {
        "API-KEY": "de2f58aa-ef42-4071-9fd6-68c0a3584231"
    }
})


export const AuthAPI = {
    authMeAPI () {
        return initial.get("auth/me")
                .then(response => {
                    return response.data
                })
    },
    authLoginAPI (email,password,rememberMe) {
        return initial.post("auth/login", {
            email,
            password,
            rememberMe
        })
            .then(response => response.data)
    },
    authLogoutAPI () {
        return initial.delete("auth/login")
    }
}
export const profileAPI = {
     setProfile (userId) {
        return initial.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus (userId) {
         return initial.get(`profile/status/${userId}`)
             .then(response => {
                     return response.data
             })
    },
    updateStatus (status) {
         return initial.put(`profile/status`, {status: status})
    }
}
export const usersAPI = {
    getUsers (page,pageSize) {
        return initial.get(`users?page=${page}&count=${pageSize}&term=`)
            .then(response => {
                return response.data
            })
    },
    showMoreUsersWithText (page,pageSize,term) {
        return initial.get(`users?page=${page}&count=${pageSize}&term=${term}`)
            .then(response => {
                return response.data
            })
    },
    follow (id) {
        return initial.post(`follow/${id}`)
    },
    unfollow (id) {
        return initial.delete(`follow/${id}`)
    }
}