/*
 * action types
 */

export const TOGGLE_IS_LOGGED = 'TOGGLE_IS_LOGGED'

 /*
 * action creators
 */

export function toggleIsLogged(isLoged) {
  return { type: TOGGLE_IS_LOGGED, isLoged }
}