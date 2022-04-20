import { useStopwatch } from "react-timer-hook"

const Stopwatch = () => {
  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false })
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
        <button onClick={reset}>Sıfırla</button>
      </div>
      <p>{isRunning ? " " : "Durduruldu"}</p>
    </div>
  )
}
export default Stopwatch
