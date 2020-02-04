import React, { useContext, Suspense, lazy } from 'react'

import { toggleFavAction } from './Actions'
import { Store } from './Store'
import { IEpisodeProps } from './interfaces'

const EpisodesList = lazy(() => import('./episodesList'))


const FavPage: React.FC = () => {
  const { state, dispatch } = useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favorites,
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

export default FavPage;
