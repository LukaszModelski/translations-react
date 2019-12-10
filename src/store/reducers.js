import { TOGGLE_IS_LOGGED } from "./actions";

const initialState = {
  isUserLogged: false,
  firbaseData: {}
}

export function reducers(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isUserLogged: action.isLoged
      }
    default:
      return state
  }
}