import {
  TOGGLE_IS_LOGGED,
  FIREBASE_DATA,
  NEW_WORD,
  TEST_WORDS,
  TEST_TABLE,
  TEST_TABLE_ANSWEAR,
  IS_ANSWER_GOOD,
  ANSWERS_CHECKED_ITERATOR,
  TABLE_ORDER,
  TOTAL_WORDS
} from "./actions";

const initialState = {
  user: false,
  firebaseData: {},
  totalWords: undefined,
  newWords: 0,
  testTable: {
    numberOfWords: 0,
    iteration: 0,
    words: []
  },
  answersChecked: 0,
  filters: {
    order: 'ascd'
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
    case TEST_TABLE_ANSWEAR:
      return {
        ...state,
        testTable: {
          ...state.testTable,
          words: {
            ...state.testTable.words,
            [action.word]: {
              ...state.testTable.words[action.word],
              answer: action.answer
            }
          }
        }
      }
    case IS_ANSWER_GOOD:
      return {
        ...state,
        testTable: {
          ...state.testTable,
          words: {
            ...state.testTable.words,
            [action.word]: {
              ...state.testTable.words[action.word],
              isAnswerGood: action.isAnswerGood
            }
          }
        }
      }
    case ANSWERS_CHECKED_ITERATOR:
      return {
        ...state,
        answersChecked: action.iterator
      }
    case TABLE_ORDER:
      return {
        ...state,
        filters: {
          ...state.filters,
          order: action.order
        }
      }
    case TOTAL_WORDS:
      return {
        ...state,
        totalWords: action.total
      }
    default:
      return state
  }
}
