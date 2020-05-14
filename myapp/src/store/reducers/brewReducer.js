import { FETCH_BREWERY, FETCH_BREWERY_SUCCESS } from "../actions";

const initialState = {
    isFetching: false,
    brewery: null,
    location: null,
    error: ""
  };

  export const brewReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BREWERY:
        return {
          ...state,
          isFetching: true,
        };
        case FETCH_BREWERY_SUCCESS:
          return {
            ...state,
            isFetching: false,
            brewery: action.payload
          }
      default:
        return state;
    }
  }; 
