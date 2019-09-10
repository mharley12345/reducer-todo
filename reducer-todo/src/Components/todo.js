import React,{useReducer} from 'react'
import {reducer , initialState} from '../reducers/reducer'

const Todo = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
return(
   <div className="Todo">
       {initialState.item}
   </div>
)
}
export default Todo