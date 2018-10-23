import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { removeTodo, toggleTodo, filterCompleted, filterIncomplete } from "../actions/TodoActions";

const List = (props) => {
    console.log(props)
    return (
        <div>

            <div className="list-group w-80 mt-5">
                {props.todoList.todo.map((todo) => <button style={todo.completed ? { textDecoration: "line-through", color: "green" } : { color: "red" }} onClick={() => props.toggleTodo(todo)} className="list-group-item list-group-item-action" key={todo.todoText}><div className="d-flex justify-content-between"><h3 className="pt-3">{todo.todoText} </h3><button className="btn btn-danger" onClick={() => props.removeTodo(todo)}><i className="fas fa-minus-circle"></i></button></div></button>)}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeTodo: removeTodo, toggleTodo: toggleTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)