const initialState = {
  characters: [],
  loading: true,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default charactersReducer;
