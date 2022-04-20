import logo from "../assets/logo.gif"
import { FaGithubSquare } from "react-icons/fa"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <a
        href="https://github.com/eliteKebob"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </div>
  )
}
export default Header
