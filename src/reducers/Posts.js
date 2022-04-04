import {
  GET_ALL_POSTS,
  GET_SELECTED_POSTS,
  GET_POST_COMMENTS,
  STORE_POSTS
} from "../constants"

const INIT_STATE = {
  posts_data: [],
  post_data: {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  },
  post_comments: []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:{
      return {
        ...state,
        posts_data: action.payload,
      }
    }

    case GET_SELECTED_POSTS: {
      return {
        ...state,
        post_data: action.payload,
      }
    }

    case GET_POST_COMMENTS: {
      return {
        ...state,
        post_comments: action.payload,
      }
    }

    case STORE_POSTS: {
      return {
        ...state,
        post_data: action.payload,
      }
    }

    default:
      return state
  }
}
