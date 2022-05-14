import { useStopwatch } from "react-timer-hook"
import { useEffect } from "react"

const Stopwatch = () => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false })

  useEffect(() => {
    if (hours < 1) {
      if (seconds < 10) {
        document.title = `${minutes}:0${seconds}`
      }
      if (seconds > 9) {
        document.title = `${minutes}:${seconds}`
      }
    }
    if (hours > 0) {
      if (seconds < 10) {
        document.title = `${hours}:${minutes}:0${seconds}`
      }
      if (seconds > 9) {
        document.title = `${hours}:${minutes}:${seconds}`
      }
    }
  }, [seconds])

  const handleReset = () => {
    reset()
    pause()
  }

  return (
    <div className="timer">
      <div className="sw-time">
        {hours > 0 ? (
          <span>
            {hours}
            <span className="time-desc"> saat</span>
          </span>
        ) : (
          ""
        )}
        <span style={{ marginLeft: "1vw" }}>
          {minutes}
          <span className="time-desc"> dakika</span>
        </span>
        <span style={{ marginLeft: "1vw" }}>
          {seconds}
          <span className="time-desc"> saniye</span>
        </span>
      </div>
      <div className="sw-buttons">
        <button
          onClick={start}
          className={!isRunning ? "active-button" : "disabled-button"}
        >
          Başlat
        </button>
        <button
          onClick={pause}
          className={isRunning ? "active-button" : "disabled-button"}
        >
          Durdur
        </button>
        <button onClick={() => handleReset()}>Sıfırla</button>
      </div>
      <p>{isRunning ? " " : "Durduruldu"}</p>
    </div>
  )
}
export default Stopwatch
