import React, { useReducer } from 'react'

import Home from './components/Home'
import Plans from './components/Plans'
import Header from './components/Header'
import Footer from './components/Footer'

import blurPurple from './images/blurPurple.svg'
import blurGreen from './images/blurGreen.svg'

import GeneralContext from './store/context/general-context'
import * as GeneralReducer from './store/reducers/general-reducer'

function App() {
  const [state, dispatch] = useReducer(GeneralReducer.GeneralReducer, GeneralReducer.initialState)

  return (
    <GeneralContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="container">
        {state.pasoActual === 0 && (
          <>
            <div className="blur-purple">
              <img src={blurPurple} alt='purple' />
            </div>
            <div className="blur-green">
              <img src={blurGreen} alt='green' />
            </div>
          </>
        )}
        <Header/>
        <main>
          {state.pasoActual === 0 ? (
            <>
              <Home/>
              <Footer/>
            </>
            ) : (
              <Plans/>
            )
          }
        </main>
      </div>
    </GeneralContext.Provider>
  )
}

export default App