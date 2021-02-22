import React from 'react';
import {useHistory} from 'react-router-dom'

export default function MovieList(props) {

  const {movieList} = props
  console.log(`movieData`, movieList)

  // const history = useHistory()

  // const handleClick = () => {
  //   history.push('/movie-select')
  // }

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieDetails key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  const history = useHistory()

  const handleClick = () => {
    history.push(`/movies/${props.movie.id}`)
  }

  return (
    <div className="movie-card"  
      onClick={handleClick}
      singletitle={title}
      singledirector={director}
      singlemetascore={metascore}
    >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
