import { FETCH_BREWERY } from "../actions";

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
      default:
        return state;
    }
  }; 
