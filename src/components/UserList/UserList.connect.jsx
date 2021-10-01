import { connect } from "react-redux";
import { userrequest, userreset } from "../../services/reducers/user.reducer";

export const mapStoreToProps = (state) => ({
  userList: state.user.data,
  error: state.user.error
});

export const mapDispatchToProps = (dispatch) => ({
  getUser: (requestParams) => {
    dispatch(userrequest(requestParams));
  },
  resetUser: () => {
    dispatch(userreset());
  }
});

export default connect(mapStoreToProps, mapDispatchToProps);
