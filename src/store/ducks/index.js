import { combineReducers } from 'redux'
import filterState from './filter'
import lastsComicsState from './lastsComics'
import lastComicState from './lastComic'
import moviesState from './movies'
import movieState from './movie'

export default combineReducers({
  filterState,
  lastsComicsState,
  lastComicState,
  moviesState,
  movieState,
})