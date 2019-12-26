import { TOGGLE_IS_LOGGED, FIREBASE_DATA, NEW_WORD, TEST_WORDS } from "./actions";

const initialState = {
  user: false,
  firebaseData: {},
  newWords: 0,
  testTable: [],
  nrOfTestItems: {
    number: 0,
    iteration: 0
  }
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
    case TEST_WORDS:
      return {
        ...state,
        nrOfTestItems: {
          number: action.number,
          iteration: action.iteration
        }
      }
    default:
      return state
  }
}
