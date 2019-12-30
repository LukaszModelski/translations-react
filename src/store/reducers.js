import {
  TOGGLE_IS_LOGGED,
  FIREBASE_DATA,
  NEW_WORD,
  TEST_WORDS,
  TEST_TABLE
} from "./actions";

const initialState = {
  user: false,
  firebaseData: {},
  newWords: 0,
  testTable: {
    numberOfWords: 0,
    iteration: 0,
    words: []
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
        testTable: {
          numberOfWords: action.number,
          iteration: action.iteration,
          words: []
        }
      }
    case TEST_TABLE:
      return {
        ...state,
        testTable: {
          ...state.testTable,
          words: action.table
        }
      }
    default:
      return state
  }
}
