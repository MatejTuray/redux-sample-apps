const filterReducer = (state = [], action) => {
    switch (action.type) {
        case "FILTER_COMPLETED":
            return state.filter((todo) => todo.complete === true)
        case "FILTER_INCOMPLETE":
            return state.filter((todo) => todo.complete === false)
        case "ALL":
            return state
        default:
            return state
    }
}

export default filterReducer