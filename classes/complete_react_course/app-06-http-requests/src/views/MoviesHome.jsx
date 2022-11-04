import { useState, useEffect } from 'react'
import axios from 'axios'
import MoviesList from '../components/MoviesList'

import classes from './MoviesHome.module.scss'

function MoviesHome() {
  const [moviesData, setMoviesData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const identifier = setTimeout(() => {
      fetchMovies()
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  async function fetchMovies () {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('https://swapi.py4e.com/api/films')

      if (response.status === 200) {
        const results = response.data.results
        
        setMoviesData(results.map(m => {
          return {
            id: m.episode_id,
            title: m.title,
            openingText: m.opening_crawl,
            releaseDate: m.release_date
          }
        }).sort((a, b) => a.id - b.id))
    
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const fetchMoviesHandler = () => {
    fetchMovies()
  }

  let content = <p>Found no movies</p>

  if (loading) {
    content = <p>Loading...</p>
  } else if (error) {
    content = <p className='text-red-500 text-xl'>{error}</p>
  } else if(moviesData.length) {
    content = <MoviesList movies={moviesData} />
  }

  return (
    <>
      <section className={classes['fetch-section']}>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section className={classes['movies-section']}>
        {content}
      </section>
    </>
  );
}

export default MoviesHome