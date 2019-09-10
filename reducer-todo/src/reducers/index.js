import moment from 'moment'

export const initialState = {
    tasks: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        completedDate: '',
        deadline: '2019-09-11',
        tags: ['react', 'reducers']
    },
]}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
                completedDate: '',
                deadline: 'December 31, 2019', // Placeholder until a drop system is implemented in form
                tags: ['placeholder']
            }
            return {
                ...state, 
                tasks: [...state.tasks, newItem]
            }

        case 'TOGGLE_ITEM':
            return {
                ...state, 
                tasks: state.tasks.map(item => {
                    if (action.payload === item.id) return {
                        ...item,
                        completed: !item.completed,
                        completedDate: !item.completed ? moment().format('MMMM D, YYYY') : ''
                    }
                    else return item
                })
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter(item => !item.completed)
            }

        default:
            return state
    }
}