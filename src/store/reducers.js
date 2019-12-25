import { TOGGLE_IS_LOGGED, FIREBASE_DATA, NEW_WORD } from "./actions";

const initialState = {
  user: false,
  firebaseData: {},
  newWords: 0
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
    case NEW_WORD:
      return {
        ...state,
        newWords: action.iterator
      }
    default:
      return state
  }
}