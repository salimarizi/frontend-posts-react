import { FETCH_ERROR, FETCH_SUCCESS } from '../constants'

const INIT_STATE = {
  error: "",
  loading: false,
  message: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {...state, error: '', message: '', loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload, message: ''};
    }
    default:
      return state;
  }
}
