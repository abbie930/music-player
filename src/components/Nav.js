import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faHeadphones, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import "../styles/_theme.scss"

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark'
    setTheme(isCurrentDark ? 'light' : 'dark')
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark')
  }

  return (
    <nav>
      <div className="title">
        <h1>Lofi Vibes&nbsp;</h1>
        <FontAwesomeIcon className="headphone-icon" icon={faHeadphones} />
      </div>
      <div className="toggle-btn-section">
        <button className="list-btn" onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faList} />
        </button>
        <div className={`toggle-checkbox m-vertical-auto`}>
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="checkbox"
            onChange={handleThemeChange}
            checked={theme === 'light'}
          />
          <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
        </div>
      </div>
    </nav>
  )
}

export default Nav