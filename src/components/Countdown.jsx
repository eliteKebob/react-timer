import { useTimer } from "react-timer-hook"
import { useState, useEffect } from "react"
import { FaHandPointRight } from "react-icons/fa"

const Countdown = () => {
  const [userHours, setUserHours] = useState(0)
  const [userMins, setUserMins] = useState(0)
  const [userSecs, setUserSecs] = useState(0)
  const [userExpiry, setUserExpiry] = useState(0)

  const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      onExpire: () => alert("Geri Sayım Tamamlandı!"),
    })

  useEffect(() => {
    setUserExpiry(
      parseInt(userHours * 3600) + parseInt(userMins * 60) + parseInt(userSecs)
    )
  }, [userHours, userMins, userSecs])

  const handleReset = () => {
    setUserHours(0)
    setUserMins(0)
    setUserSecs(0)
    setUserExpiry(0)
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
      <div className="cd-input">
        <label htmlFor="hours">Saat</label>
        <input
          type="number"
          value={userHours}
          name="hours"
          onChange={(e) => setUserHours(e.target.value)}
          placeholder="Saat"
        />
        <label htmlFor="mins">Dakika</label>
        <input
          type="number"
          value={userMins}
          name="mins"
          onChange={(e) => setUserMins(e.target.value)}
          placeholder="Dakika"
        />
        <label htmlFor="secs">Saniye</label>
        <input
          type="number"
          value={userSecs}
          name="Saniye"
          onChange={(e) => setUserSecs(e.target.value)}
          placeholder="Saniye"
        />
      </div>
      <div className="sw-buttons">
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date()
            time.setSeconds(time.getSeconds() + parseInt(userExpiry))
            restart(time)
          }}
          className={!isRunning ? "active-button" : "disabled-button"}
        >
          Başlat
        </button>
        <button
          onClick={resume}
          className={!isRunning ? "active-button" : "disabled-button"}
        >
          Devam Et
        </button>
        <button
          onClick={pause}
          className={isRunning ? "active-button" : "disabled-button"}
        >
          Duraklat
        </button>
        <button onClick={handleReset}>Sıfırla</button>
      </div>
      <p>{isRunning ? " " : "Durduruldu"}</p>
      <p className="info">
        <FaHandPointRight /> Butonlarda işlevsel bozukluklar olması durumunda
        Duraklat butonuna bir kere basmanız yeterlidir.
      </p>
    </div>
  )
}
export default Countdown
