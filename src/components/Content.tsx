import React from 'react'
import { MovieProps } from '../App'
import Header from './Header'
import { MovieCard } from './MovieCard'

export interface ContentProps {
  movies: MovieProps[]
  selectedGenre: {
    title: string
  }
}

export function Content({ movies, selectedGenre }: ContentProps) {
  
  return (
    <div className="container">
    <Header
    selectedGenre={selectedGenre}
    />

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}