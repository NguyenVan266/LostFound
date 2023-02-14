import { AUTH_SUCCESS, AUTH_FAILED } from "./action";
import { initState } from "./Context";

const Reducer = (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLogin: true,
        ...action.payload,
      };
    case AUTH_FAILED:
      return {
        ...initState,
      };
  }
};

export default Reducer;
