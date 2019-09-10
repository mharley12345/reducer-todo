export const initialState = { item: 'Learn about reducers',
completed: false,
id: 3892987589
}
export const reducer = (state) => {
    const newState = state 
    return newState
}

const newStateValue = reducer(initialState);
console.log(initialState,newStateValue)
