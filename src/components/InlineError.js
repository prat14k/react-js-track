import PropTypes from "prop-types"

export const InlineError = (props) => {
  const message = props.message;
  return <div className="error">{message || ""}</div>
}

InlineError.propTypes = {
  message: PropTypes.string
}