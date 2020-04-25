import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false });
  };
  async componentDidMount() {
    this.getMovies();
  }
  render() {
    const { movies, isLoading } = this.state;
    return (
      <div>
        {isLoading
          ? '로딩중'
          : movies.map((movie) => {
              return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;
            })}
      </div>
    );
  }
}

export default App;
