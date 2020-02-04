import React, { useContext } from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { Store } from './Store'


const App: React.FC<RouteComponentProps> = (props: any) => {
  const { state } = useContext(Store)

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;
