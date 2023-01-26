import PropTypes from "prop-types"

function Square({ label, backgroundColor = "yellow", size = "md", handleClick, color = "black" }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    height: scale * 200,
    width: scale * 200,
    border: "none",
    color,
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Square.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  color: PropTypes.string
}

export default Square
