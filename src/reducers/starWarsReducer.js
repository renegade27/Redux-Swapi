import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: true,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching : true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching : false,
        characters : action.payload
      }
    case FETCH_FAILURE:
      console.log(action.error);
      return {
        ...state,
        error : action.error
      }
    default:
      return state;
  }
};
