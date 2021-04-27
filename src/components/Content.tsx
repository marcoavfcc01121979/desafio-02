import '../styles/content.scss';
import { MovieCard } from './MovieCard';

interface Select {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  select: Select;
  movie: Movie[];
}


export function Content({ select, movie }: ContentProps) {
  // Complete aqui
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {select.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movie.map(filme => (
            <MovieCard 
              key ={filme.imdbID} 
              title={filme.Title} 
              poster={filme.Poster} 
              runtime={filme.Runtime} 
              rating={filme.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
  
}