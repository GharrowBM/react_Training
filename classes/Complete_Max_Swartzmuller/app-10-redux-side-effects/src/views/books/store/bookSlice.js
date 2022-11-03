const { createSlice } = require("@reduxjs/toolkit");

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: {
    books: [
      {
        id: 1,
        title: 'Book A',
        description: 'Description of Book A',
        price: 6.99
      },
      {
        id: 2,
        title: 'Book B',
        description: 'Description of Book B',
        price: 4.99
      },
      {
        id: 3,
        title: 'Book C',
        description: 'Description of Book C',
        price: 12.99
      },
    ]
  },
  reducers: {
    addBook(state, action) {
      return {
        ...state,
        books: [...state.books, action.payload]
      }
    },
    editBook(state, action) {
      const filteredBooks = state.books.filter(b => b.id !== action.payload.bookId)
      const updatedBook = {...state.books.find(b => b.id === action.payload.bookId), ...action.payload.book}

      return {
        ...state,
        books: [...filteredBooks, updatedBook]
      }
    },
    deleteBook(state, action) {
      return {
        ...state,
        books: [...state.books.filter(b => b.id !== action.payload.bookId)]
      }
    }
  }
})

export const { addBook, editBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer