import React, { useContext, useEffect, lazy, Suspense } from 'react'
import { IEpisodeProps } from './interfaces'
import { Store } from './Store'

import { toggleFavAction, fetchDataAction } from './Actions'


const EpisodesList = lazy(() => import('./episodesList'))

const HomePage: React.FC = () => {
  const { state, dispatch } = useContext(Store)

  useEffect((): void => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction,
    favorites: state.favorites,
    dispatch,
  }

  return (
    <Suspense fallback={<><h1>LOADING...</h1></>}>
      <EpisodesList {...props} />
    </Suspense>
  );
}

export default HomePage;
