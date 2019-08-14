// Create all the action creaters

export function selectBook(book) {
    console.log("select book");
    return {
        type: 'SELECT_BOOK',
        payload: book
    };
}