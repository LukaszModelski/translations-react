/*
 * action types
 */

export const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED'
export const FIREBASE_DATA = 'FIREBASE_DATA'
export const NEW_WORD = 'NEW_WORD'
export const TEST_WORDS = 'TEST_WORDS'
export const TEST_TABLE = 'TEST_TABLE'
export const TEST_TABLE_ANSWEAR = 'TEST_TABLE_ANSWEAR'

 /*
 * action creators
 */

export function toggleIsLogged(isLoged) {
  return { type: TOGGLE_IS_LOGGED, isLoged }
}

export function setFirebaseData(firebaseData) {
  return { type: FIREBASE_DATA, firebaseData }
}

export function triggerNewWordAdded(iterator) {
  return { type: NEW_WORD, iterator }
}

export function setHowManyTestWords(number, iteration) {
  return { type: TEST_WORDS, number, iteration }
}

export function setTestTable(table) {
  return { type: TEST_TABLE, table }
}

export function setTestTableAnswer(word, answer) {
  return { type: TEST_TABLE_ANSWEAR, word, answer }
}
