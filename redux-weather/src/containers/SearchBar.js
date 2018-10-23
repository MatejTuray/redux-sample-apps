import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import fetchWeather from "../actions/fetchweather"

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            term: ""
        }
    }

    handleChange(e) {
        this.setState({
            term: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)} className="form-inline w-100 mt-5">
                    <input id="search-bar" value={this.state.term} onChange={(e) => this.handleChange(e)} placeholder="Add a city" className="form-control w-75" type="text" />
                    <button type="submit" className="btn btn-outline-secondary ml-3"><i className="fas fa-search-plus"></i></button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch)

}

export default connect(null, mapDispatchToProps)(SearchBar)