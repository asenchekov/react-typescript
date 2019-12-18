import React from 'react';

import { IEpisode, IEpisodeProps } from './interfaces'


const episodesList: React.FC<IEpisodeProps> = ({episodes, toggleFavAction, favorites}) => (
  <section className="episode-layout">
    {episodes.map(({id, image, name, season, number}: IEpisode) => {
      return (
        <section
          key={id}
          className="episode-box"
        >
          <img
            src={image.medium}
            alt={`Rick and Morty ${name}`}
          />
          <div>
            {name}
          </div>
          <section style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              Season: {season} Number: {number}
            </div>
            <button
              onClick={() => toggleFavAction({id, image, name, season, number})}
            >
              {
                favorites.map((episode: IEpisode) => episode.id)
                  .includes(id) ? 'Unfav' : 'Fav'
              }
            </button>
          </section>
        </section>
      )
    })}
  </section>
)

export default episodesList;
