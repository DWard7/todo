import React from 'react'
import { IconTrash } from '@tabler/icons'
import { Card, Checkbox, Flex, ThemeIcon, Tooltip } from "@mantine/core"

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <Card sx={{ overflow: 'visible', marginBottom: 10 }}>
            <Flex gap='md'>
                <Checkbox
                    label={todo.task}
                    sx={{ flexGrow: 1, textDecoration: todo.isComplete ? 'line-through' : 'none' }}
                    checked={todo.isComplete}
                    onChange={() => toggleTodo(todo.id)}
                />
                <Tooltip label='Delete' transition='scale-x' withArrow color='cyan' sx={{ fontSize: 14 }}>
                    <ThemeIcon sx={{ cursor: 'pointer' }} onClick={()=> deleteTodo(todo.id)}>
                        <IconTrash />
                    </ThemeIcon>
                </Tooltip>
            </Flex>
        </Card>
    )
}

export default TodoItem;