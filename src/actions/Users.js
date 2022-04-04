import {
  GET_ALL_USERS,
  GET_SELECTED_USERS,
  STORE_USERS,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "../constants"
import axios from '../util/Api'

export const getUsers = () => {
  return (dispatch) => {
    return axios.get('users').then(({data}) => {
      if (data)
        dispatch({type: GET_ALL_USERS, payload: data})
      else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getSelectedUser = (postId) => {
  return (dispatch) => {
    return axios.get(`users/${postId}`).then(({data}) => {
      if (data)
        dispatch({type: GET_SELECTED_USERS, payload: data})
      else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getSelectedUserName = (datas, userId) => {
  let user = datas.find(user => user.id === userId)
  return user === undefined ? '' : user.name
}
