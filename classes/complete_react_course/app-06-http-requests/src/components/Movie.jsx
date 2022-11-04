import classes from './Movie.module.scss'

function Movie({movie}) {
  return <div className={classes.movie}>
    <div className={classes['release-date']}>
      {movie.releaseDate.substring(0,4)}
    </div>
    <h2>{movie.title}</h2>
    <p>
      {movie.openingText}
    </p>
  </div>
}

export default Movie