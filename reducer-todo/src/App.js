import React, { useReducer } from 'react'

import { reducer, initialState } from './reducers/index'

import TodoList from './components/todo/TodoList'
import FormikForm from './components/FormikForm'

import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (newTask) => {
    dispatch({type: 'ADD_ITEM', payload: newTask})
  }

  const toggleItem = (task) => {
    dispatch({ type: 'TOGGLE_ITEM', payload: task.id })
  }
  
  const clearCompleted = (event) => {
    event.preventDefault()
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className='container'>
      <FormikForm addItem={addItem} clearCompleted={clearCompleted} />
      <TodoList taskList={state} toggleItem={toggleItem}/>
    </div>
  )
}

export default App