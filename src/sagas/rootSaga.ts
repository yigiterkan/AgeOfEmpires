import { takeLatest,all,fork } from "redux-saga/effects";
import ActionTypes from "../actionTypes";
import { handleGetUnit } from "./unitSaga";

export function* rootSaga(){
  yield  all([fork(unitSaga)]);
}

//ActionTypes.unit.GET_UNIT