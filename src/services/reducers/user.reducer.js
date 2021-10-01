import { createActions, handleActions, combineActions } from "redux-actions";

// Actions
export const USER_REQUEST = "USERREQUEST";
export const USER_SUCCESS = "USERSUCCESS";
export const USER_FAILURE = "USERFAILURE";
export const USER_RESET = "USERRESET";

export const initialState = {
  data: [],
  error: null,
  inProgress: false
};

export const {
  userrequest,
  usersuccess,
  userfailure,
  userreset
} = createActions({
  [USER_REQUEST]: (data = []) => ({
    inProgress: true,
    requestParam: data,
    data
  }),
  [USER_SUCCESS]: (data) => ({
    inProgress: false,
    data,
    error: null
  }),
  [USER_FAILURE]: (error) => ({ inProgress: false, error }),
  [USER_RESET]: () => initialState
});

const userReducer = handleActions(
  {
    [combineActions(userrequest, usersuccess, userfailure, userreset)](
      state,
      { payload: { inProgress, data, error } }
    ) {
      return {
        ...state,
        inProgress,
        data,
        error
      };
    }
  },
  initialState
);

export default userReducer;
