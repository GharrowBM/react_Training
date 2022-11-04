import Movie from './Movie';
import classes from './MoviesList.module.scss'

function MoviesList(props) {

  console.log(props.movies);

  return (<>
  {props.movies.length ? props.movies.map(m => <Movie key={m.id} movie={m} />) : null}
  </>)
}

export default MoviesList