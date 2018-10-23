const selectBook = (book) => {
    console.log("Book has been selected", book.title)
    return {
        type: "SELECTED_BOOK",
        payload: book
    }
}

export default selectBook;