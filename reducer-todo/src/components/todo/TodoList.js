import React from 'react'
import moment from 'moment'

import Todo from './Todo'

import { List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const TodoList = ({ taskList, toggleItem }) => {
    const currentDate = moment()
    
    return (
        <List divided relaxed>
            {taskList.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={toggleItem} currentDate={currentDate}/>
            ))}
        </List>
    )
}

export default TodoList