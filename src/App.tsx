import './index.css';

import { Header } from './components/Header';
import { PitImage } from './components/Pit&Image';
import { Info } from './components/Info';
import { About } from './components/About';
import { Buy } from './components/Buy';

function App() {
  return (
    <>
      <main>
        < Header />
        < PitImage />
        < Info />
        < About />
        < Buy />
      </main>
    </>
  )
}

export default App
