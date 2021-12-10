import { call, put, select } from 'redux-saga/effects'
import Action from './redux';
import { get } from "lodash";

export function* search(api) {
  try {
    const response = yield call(api.Song.search)
    
    console.log(response)
    if (response.ok) {
      const list = get(response, ['data'], {})
      yield put(Action.songSuccess({list}))
    } else {
      const { message } = get(response, ['data'], {})
      yield put(Action.songFailure(message))
    }
  } catch (ex) {
    console.log(ex)
    yield put(Action.songFailure())
  }
}
