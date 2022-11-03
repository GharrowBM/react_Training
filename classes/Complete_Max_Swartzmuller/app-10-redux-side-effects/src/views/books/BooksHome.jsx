import { useState } from 'react'
import { useSelector } from 'react-redux'
import Book from '../../components/Book'
import classes from './BooksHome.module.scss'

function BooksHome() {
  const books = useSelector(state => state.books.books)

  return <div className={classes.books}>
    <h1>Books List</h1>
    {books.map((b, i) => <Book key={i} book={b} />)}
  </div>
}

export default BooksHome