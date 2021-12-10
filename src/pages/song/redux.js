import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { get } from "lodash"

import { SEARCHING } from '../util/state'
import { MESSAGE_ERROR_DEFAULT } from '../util/messages'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  songSearch: null,  
  songSuccess: ['dados'],
  songFailure: ['message'],
  songCleanMessage: null,
  songSetState: ['state'],
  songCleanTable: null,
});

export const SongTypes = Types;
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
export const setSong = (state, { obj }) => state.merge({ obj })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SONG_SEARCH]: request,
  [Types.SONG_SUCCESS]: success,
  [Types.SONG_FAILURE]: failure,
  [Types.SONG_CLEAN_MESSAGE]: cleanMessage,
  [Types.SONG_SET_STATE]: setState,
  [Types.SONG_CLEAN_TABLE]: cleanTable,
})