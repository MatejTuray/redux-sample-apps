import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodo } from "../actions/TodoActions";

class Form extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            todoText: ""
        }
    }
    handleChange(e) {

        this.setState({
            todoText: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let todo = e.target[0].value;
        this.props.addTodo(todo)
        this.setState({
            todoText: ""
        })
    }

    render() {
        return (
            <div className="mt-5">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-row w-100">
                        <div className="col-10">
                            <input type="text" onChange={(e) => this.handleChange(e)} className="form-control" placeholder="Write a todo" value={this.state.todoText} />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success w-100">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(Form)