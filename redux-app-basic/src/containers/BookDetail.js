import React from 'react'
import { connect } from 'react-redux';

const BookDetail = (props) => {
    return (
        <div>
            {props.book.title ? <div><h3>Details for: {props.book.title} by {props.book.author} </h3> <p>Length: {props.book.pages} pages</p> </div> : <h3> Select a book to get started</h3>}

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }

}

export default connect(mapStateToProps)(BookDetail);