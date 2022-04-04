import {
  GET_ALL_POSTS,
  GET_SELECTED_POSTS,
  GET_POST_COMMENTS,
  STORE_POSTS,
  FETCH_SUCCESS,
  FETCH_ERROR
} from "../constants"
import axios from '../util/Api'

export const getPosts = () => {
  return (dispatch) => {
    return axios.get('posts').then(({data}) => {
      if (data)
        dispatch({type: GET_ALL_POSTS, payload: data})
      else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getSelectedPost = (postId) => {
  return (dispatch) => {
    return axios.get(`posts/${postId}`).then(({data}) => {
      if (data)
        dispatch({type: GET_SELECTED_POSTS, payload: data})
      else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const getPostComments = (postId) => {
  return (dispatch) => {
    return axios.get(`posts/${postId}/comments`).then(({data}) => {
      if (data)
        dispatch({type: GET_POST_COMMENTS, payload: data})
      else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const storePosts = (posts) => {
  return async(dispatch) => {
    let posts_data = await axios.get('posts')
      .then(result => { return result.data })
      .catch(error => { throw error })

    return axios.post('posts', posts).then(({data}) => {
      if (data) {
        posts_data.push(data)
        dispatch({type: STORE_POSTS, payload: data})
        dispatch({type: GET_ALL_POSTS, payload: posts_data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}

export const storeComments = (postId, comments) => {
  return async(dispatch) => {
    let comments_data = await axios.get(`posts/${postId}/comments`)
      .then(result => { return result.data })
      .catch(error => { throw error })

    return axios.post(`posts/${postId}/comments`, comments).then(({data}) => {
      if (data) {
        comments_data.push(data)
        dispatch({type: GET_POST_COMMENTS, payload: comments_data})
      }else
        dispatch({type: FETCH_ERROR, payload: data.error})
    })
  }
}
