import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

const Book = props => {
    return (
        <li onClick={() => props.selectBook(props.book)}>
            Title: {props.book.title} 
            Author: {props.book.author}
        </li>
    );
}

export default connect(null, {selectBook})(Book);