const todoReducer = (state = [],
    action) => {
    switch (action.type) {
        case "ADD_TODO":
            return state.concat(action.payload);
        case "REMOVE_TODO":
            return state.filter((item) => item !== action.payload)
        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.todoText !== action.payload.todoText) {
                    return todo
                }
                else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            })

        default:
            return state
    }
}
export default todoReducer;