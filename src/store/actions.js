/*
 * action types
 */

export const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED'
export const FIREBASE_DATA = 'FIREBASE_DATA'

 /*
 * action creators
 */

export function toggleIsLogged(isLoged) {
  return { type: TOGGLE_IS_LOGGED, isLoged }
}

export function setFirebaseData(firebaseData) {
  return { type: FIREBASE_DATA, firebaseData }
}