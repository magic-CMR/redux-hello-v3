const initialState = [
  {
    id:'asf123',
    text:'hello'
  },
  {
    id:'zxc123',
    text:'hi'
  }
]

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const comments = [
        ...state,
        action.comment
      ]
      return comments
    default:
      return state
  }
}

export default rootReducer
