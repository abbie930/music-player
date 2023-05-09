import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faPlay, 
  faAngleLeft, 
  faAngleRight,
  faPause
 } from "@fortawesome/free-solid-svg-icons"

const Player = ({ currentSong, isPlaying, setIsPlaying, songs, setCurrentSong }) => {
  //Ref
  const audioRef = useRef(null)
  //Event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play()
    }
  }
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration || 0
    setSongInfo({ ...songInfo, currentTime: current, duration })
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }
  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }
  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    if (direction === 'skip-forward') {
      setCurrentSong(songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1])
    }
    if (direction === 'skip-back') {
      setCurrentSong(songs[currentIndex === 0 ? songs.length - 1 : currentIndex - 1])
    }
  }
  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
          min={0} 
          max={songInfo.duration} 
          value={songInfo.currentTime} 
          onChange={dragHandler} 
          type="range" 
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back" 
          size="2x" 
          icon={faAngleLeft} 
        />
        <FontAwesomeIcon 
          onClick={playSongHandler} 
          className="play" 
          size="2x" 
          icon={isPlaying ? faPause : faPlay} 
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')} 
          className="skip-forward" 
          size="2x" 
          icon={faAngleRight} 
        />
      </div>
      <audio
        onLoadedData={autoPlayHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  )
}

export default Player
