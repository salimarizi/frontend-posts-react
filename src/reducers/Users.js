import {
  GET_ALL_USERS,
  GET_SELECTED_USERS,
  STORE_USERS
} from "../constants"

const INIT_STATE = {
  users_data: [],
  user_data: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:{
      return {
        ...state,
        users_data: action.payload,
      }
    }

    case GET_SELECTED_USERS: {
      return {
        ...state,
        user_data: action.payload,
      }
    }

    case STORE_USERS: {
      return {
        ...state,
        user_data: action.payload,
      }
    }

    default:
      return state
  }
}
