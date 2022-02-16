import React from 'react'
import {connect} from 'react-redux'
import { UPDATE_TODO_ACTION } from '../store/todosReducer'

function TodoItem({todo, onToggle}){
    return <li>
        <label htmlFor="">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
            {todo.title}
        </label>
    </li>
}

export function Todolist({todos, onToggle}){
    return <ul>
        {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id}/>)}

    </ul>
    
    
}

// Composant lié au store
export const TodolistStore = connect(
    (state) => ({
        todos: state.todos
}),
// Cablage au niveau du composant, maper des dispatch au niveau de mes props
// retourner un objet qui permet de dire quelles données on souhaite modifiere
// De manière générale on va éviter de mettre la logique des dispatchs dans les composants
// On va choisir des sélecteurs et des actions
(dispatch) => ({
onToggle: todo => dispatch({
    type: UPDATE_TODO_ACTION,
    payload: {...todo, completed: !todo.completed}
})
})
)(Todolist)