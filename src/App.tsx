import React, { useContext, useEffect } from 'react'

import { IEpisode, IAction } from './interfaces'

import { Store } from './Store'
import EpisodesList from './episodesList'


const App: React.FC = () => {
  const {state, dispatch} = useContext(Store)

  useEffect((): void => {
    state.episodes.length === 0 && fetchDataAction()
  });

  const fetchDataAction = async () => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(url)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.map((ep: IEpisode): number => ep.id)
      .includes(episode.id)

    return dispatch({
      type: episodeInFav ? 'REMOVE_FAV' : 'ADD_FAV',
      payload: episode
    })
  }

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          Favorite(s): {state.favorites.length}
        </div>
      </header>
      <EpisodesList
        episodes={state.episodes}
        toggleFavAction={toggleFavAction}
        favorites={state.favorites}
      />
    </>
  );
}

export default App;
