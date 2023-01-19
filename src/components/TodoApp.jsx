import React from 'react'
import { Container } from '@mantine/core'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import TodoList from './TodoList'



function TodoApp() {

    const [todos, setTodos] = useState([]);

    const addTodo = (newTask) => {
        const newTodo = {
            id: uuidv4(),
            task: newTask,
            isComplete: false,
        };

        setTodos([
            ...todos,
            newTodo
        ])
    }

    const toggleTodo = (targetId) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === targetId) {
                todo = {
                    ...todo,
                    isComplete: !todo.isComplete,
                }
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    const deleteTodo = (targetId) => {
        const filteredTodos = todos.filter(todo => todo.id != targetId);
        setTodos(filteredTodos);
    }


    return (
        <Container sx={{ marginTop: 20 }}>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </Container>
    )
}

export default TodoApp