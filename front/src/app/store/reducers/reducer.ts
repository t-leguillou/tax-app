import * as KeyActions from './../actions/action';
import {Key} from '../models/model';

const initialState: Key = {
  API_KEY: null
};

export function reducer(state: Key = initialState, action: KeyActions.Actions) {
  switch (action.type) {
    case KeyActions.ADD_KEY:
      return {
        ...state,
        API_KEY : action.payload.API_KEY};
    default:
      return state;
  }
}
