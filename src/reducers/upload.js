// IMPORTS

/* NPM */
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  type: null,
  data: null
});

export default {

  state: initialState,
  reducer(state = initialState, action) {
    if (action.type === 'UPLOAD_DOCUMENT_SUCCESS') {
      return state.merge({
        type: 'SUCCESS',
        data: action.data
      });
    }

    if (action.type === 'UPLOAD_DOCUMENT_FAIL') {
      return state.merge({
        type: 'ERROR',
        data: action.error
      });
    }

    if (action.type === 'UPLOAD_DOCUMENT_SUBMIT') {
      return state.merge({
        type: 'LOADING',
        data: null
      });
    }

    return state;
  },
};
