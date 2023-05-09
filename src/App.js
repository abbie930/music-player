import { useState } from "react"
//Import Styles
import "./styles/app.scss"
//Import data
import data from "./data"

//Adding Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library"

function App() {
  //State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong}
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        currentSong={currentSong}
      />
    </div>
  )
}

export default App
