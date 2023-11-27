import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='leftNavDiv'>
          <div className="leftNavDivUp">NTI Gymnasiet</div>
          <div className="leftNavDivDown">Personal</div>
        </div>
        <div className="rightNavDiv">
          <img src="./assets/images/placeholder_person.png" alt="Person photo" />
        </div>
      </header>
      <div>

      </div>
    </>
  )
}

export default App
