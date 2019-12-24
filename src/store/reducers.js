import { TOGGLE_IS_LOGGED, FIREBASE_DATA } from "./actions";

const initialState = {
  user: false,
  firebaseData: {}
}

export function reducers(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        user: action.isLoged
      }
    case FIREBASE_DATA:
      return {
        ...state,
        firebaseData: action.firebaseData
      }
    default:
      return state
  }
}