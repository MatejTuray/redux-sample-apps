const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            todoText: todo,
            completed: false,
        }
    }
}
const removeTodo = (todo) => {
    return {
        type: "REMOVE_TODO",
        payload: todo
    }
}
const toggleTodo = (todo) => {
    return {
        type: "TOGGLE_TODO",
        payload: todo
    }
}
const filterCompleted = () => {
    return {
        type: "FILTER_COMPLETED"
    }
}
const filterIncomplete = () => {
    return {
        type: "FILTER_INCOMPLETE"
    }
}

export { addTodo, removeTodo, toggleTodo, filterCompleted, filterIncomplete };