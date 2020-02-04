import { IEpisode, IAction } from './interfaces'


export const fetchDataAction = async (dispatch: any) => {
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(url)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (episode: IEpisode, favorites: Array<IEpisode>, dispatch: any): IAction => {
  const episodeInFav = favorites.map((ep: IEpisode): number => ep.id)
    .includes(episode.id)

  return dispatch({
    type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
    payload: episode
  })
}