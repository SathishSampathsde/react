const counterReducer = (state, action) => {
  if (action.type === "increase") {
    return {
      count: state.count++,
      showCount: state.showCount,
    };
  }
  if (action.type === "decrease") {
    return {
      count: state.count--,
      showCount: state.showCount,
    };
  }
  if (action.type === "toggleShowCount") { 
    return {
      count: state.count,
      showCount: !state.showCount,
    };
  }
  if (action.type === "increaseBy") {
    return {
      count: state.count + action.value,
      showCount: state.showCount,
    };
  }

  return state;
};

export default counterReducer;
