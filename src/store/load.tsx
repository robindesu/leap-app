const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case "LOAD":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = (data: any) => ({ type: "LOAD", data });

export default reducer;
