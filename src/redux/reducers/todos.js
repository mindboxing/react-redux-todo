import { ADD_TODO, ADD_TODO_SUCCESS, TOGGLE_TODO } from '../actionTypes';

export const initialState = {
    allIds: [],
    byIds: {}
}

export const todos = (state = initialState, action) => {
    if (!action) {
      return state;
    }
    switch (action.type) {
        case ADD_TODO_SUCCESS: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }
        };

        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            }
        }

        default:
            return state;
    }
}

export default todos;