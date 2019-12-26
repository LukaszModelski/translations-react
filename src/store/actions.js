/*
 * action types
 */

export const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED'
export const FIREBASE_DATA = 'FIREBASE_DATA'
export const NEW_WORD = 'NEW_WORD'
export const TEST_WORDS = 'TEST_WORDS'

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
