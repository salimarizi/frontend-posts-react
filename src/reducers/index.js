import { combineReducers } from 'redux'

import PostsReducer from './Posts'
import UsersReducer from './Users'

const reducer = combineReducers({
  PostsReducer,
  UsersReducer
})

export default reducer
