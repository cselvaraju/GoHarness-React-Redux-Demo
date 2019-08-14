import React from 'react';
import { connect } from 'react-redux';

const BookDetails = (props) => {
    console.log("book");
    console.log(props.book);
    if (!props || !props.book) {
        return (
            <div>
                No book selected
            </div>
        )
    }
    return (
        <div>
            <h3>{props.book.title}</h3>
            Author: {props.book.author}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        book: state.selectedBook
    }
}

export default connect(mapStateToProps)(BookDetails);