const initialState = {
  isLoggedIn: false,
  username: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
