import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants"

export const initialState = VISIBILITY_FILTERS;

const visibilityFilter = (state = initialState, action) => {
  if (!action) {
    return state;
  } 
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}

export default visibilityFilter;