import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  friends: [],
  isLoading: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        friends: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
