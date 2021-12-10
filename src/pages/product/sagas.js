import { call, put, select } from 'redux-saga/effects'
import Action from './redux';
import { get } from "lodash";

export function* search(api) {
  try {
    const response = yield call(api.Product.search)
    
    if (response.ok) {
      const list = get(response, ['data'], {})
      console.log(list)
      yield put(Action.productSuccess({list}))
    } else {
      const { message } = get(response, ['data'], {})
      yield put(Action.productFailure(message))
    }
  } catch (ex) {
    console.log(ex)
    yield put(Action.productFailure())
  }
}
