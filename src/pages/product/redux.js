import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { get } from "lodash"

import { SEARCHING } from '../util/state'
import { MESSAGE_ERROR_DEFAULT } from '../util/messages'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  productSearch: null,  
  productSuccess: ['dados'],
  productFailure: ['message'],
  productCleanMessage: null,
  productSetState: ['state'],
  productCleanTable: null,
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: {},
  fetching: false,
  state: SEARCHING,
});

/* ------------- Reducers ------------- */

export const request = (state) => state.merge({ fetching: true })
export const success = (state, { dados }) => {

  let data = {
    list: get(dados, ['list'], get(state.data, ['list'], [])),
    message: get(dados, ['message'], get(state.data, ['message'], [])),
  }

  state = state.merge({ fetching: false, data })
  return state
}

export const failure = (state, { message = MESSAGE_ERROR_DEFAULT }) => {
  return state.merge({ fetching: false, data: { ...state.data, message: { tipo: 'error', descricao: message } } })
}

export const cleanMessage = (state) => state.merge({ data: { ...state.data, message: "" } })
export const cleanTable = (state) => state.merge({ data: { ...state.data, list: [] } })

export const setState = (state, action) => state.merge({ state: action.state })
export const setProduct = (state, { obj }) => state.merge({ obj })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_SEARCH]: request,
  [Types.PRODUCT_SUCCESS]: success,
  [Types.PRODUCT_FAILURE]: failure,
  [Types.PRODUCT_CLEAN_MESSAGE]: cleanMessage,
  [Types.PRODUCT_SET_STATE]: setState,
  [Types.PRODUCT_CLEAN_TABLE]: cleanTable,
})