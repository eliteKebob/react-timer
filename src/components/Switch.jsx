import { FaClock, FaStopwatch } from "react-icons/fa"

const Switch = ({ setMode, mode }) => {
  return (
    <div className="switch">
      <div
        className={mode ? "mode" : "mode-selected"}
        onClick={() => setMode(false)}
      >
        <FaStopwatch />
        <span>Kronometre</span>
      </div>
      <div
        className={!mode ? "mode" : "mode-selected"}
        onClick={() => setMode(true)}
      >
        <FaClock />
        <span>Geri Sayım</span>
      </div>
    </div>
  )
}
export default Switch
