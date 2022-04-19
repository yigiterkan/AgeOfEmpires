//import axios from "axios";
import { call, put } from "redux-saga/effects";
import testData from '../data/data.json'
import data from '../data/data.json'

const getUnit = () => data;

 function* fetchUnit() {
    try{
        const response = yield call(getUnit);
        yield put()
        return testData;
    }catch(err){
        console.log(err)
    }
  
}

export function* handleGetUnit(){
    yield call(fetchUnit);

}