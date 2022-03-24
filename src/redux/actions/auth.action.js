import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../contants'

export const login = payload => ({ type: SIGN_IN, payload })
export const register = payload => ({ type: SIGN_UP, payload })
export const logout = payload => ({ type: SIGN_OUT, payload })
