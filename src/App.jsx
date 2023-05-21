import React from 'react'

import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css';
import './satoshi.css';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
<Hero />
<Demo />
      </div>
    </main>
  )
}

export default App