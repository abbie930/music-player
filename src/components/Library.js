import LibrarySong from "./LibrarySong"


const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, currentSong, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>PlayList</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  )
}

export default Library