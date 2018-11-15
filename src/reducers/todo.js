const initialState = {
  arr: ['eat', 'sleep', 'codesmith'],
  currentText: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_CHANGE':
      return {
        ...state,
        currentText: action.payload
      }

    case 'HANDLE_SUBMIT': {
      action.payload.preventDefault(); // prevents auto-rerender of page when form is sutmitted
      const arrCopy = state.arr.slice();
      arrCopy.push(state.currentText);
      return {
        arr: arrCopy,
        currentText: '',
      }
    }

    case 'HANDLE_DELETE': {
      const arrCopy = state.arr.filter((ele, i) => {
        return action.payload !== i;
      });
      return {
        ...state,
        arr: arrCopy,
      }
    }

    default:
      return state
  }
} 