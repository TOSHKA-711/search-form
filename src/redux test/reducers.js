


// const initialState = {
//   value: 0,
// };



// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state.value= state.value + 1;
//     case "DECREMENT":
//       return state.value= state.value - 1;

//     default:
//       return state;
//   }
// };

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
  value: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {  value: state.value + 1 };
    case DECREMENT:
      return {  value: state.value - 1 };
    default:
      return state;
  }
};

