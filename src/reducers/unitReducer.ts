import ActionTypes from '../actionTypes';
import testData from '../data/data.json'
// import * as testData from '../data/data.json'

// const initialState=[]

const unitReducer = (state = testData, action: { type: any; }) => {
    switch (action.type) {
      case ActionTypes.unit.GET_UNIT:
        return {
          state
        };
      
      default:
        return state;
    }
  };

export default unitReducer;