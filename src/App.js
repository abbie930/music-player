import { useState } from "react"
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
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
    </div>
  )
}

export default App
