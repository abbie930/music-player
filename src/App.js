import { useState } from "react"
import { ThemeContext } from "./contexts/ThemeContext"
//Import Styles
import "./styles/app.scss"
//Import data
import data from "./data"

//Adding Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library"
import Nav from "./components/Nav"

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)

  //
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme')
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefault
  }

  const [theme, setTheme] = useState(getDefaultTheme())

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className={`App ${libraryStatus ? "library-active" : ""}`}>
          <Nav 
            libraryStatus={libraryStatus} 
            setLibraryStatus={setLibraryStatus} 
          />
          <Song 
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
          <Player 
            setIsPlaying={setIsPlaying} 
            isPlaying={isPlaying} 
            currentSong={currentSong}
            songs={songs}
            setCurrentSong={setCurrentSong}
          />
          <Library
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            currentSong={currentSong}
            libraryStatus={libraryStatus}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
