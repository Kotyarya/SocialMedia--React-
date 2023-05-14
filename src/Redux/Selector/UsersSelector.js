import {createSelector} from "reselect";

const getUsersSelector = (state) => state.usersPage.users

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getSearchUserText = (state) => state.usersPage.searchUserText
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getPageSize = (state) => state.usersPage.pageSize
export const getIsFetching = (state) => state.usersPage.isFetching
export const getIsFollow = (state) => state.usersPage.isFollow
export const getIsAuth = (state) => state.usersPage.isAuth

