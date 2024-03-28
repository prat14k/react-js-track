/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'

const Subtab = ({ id, active, clickHandler, name, content }) => {
  const displayClass = active ? 'active' : 'inactive'

  return (
    <>
      <a
        className={`${displayClass} tab-link`}
        onClick={() => clickHandler(id)}
      >
        {name}
      </a>
      {active && content}
    </>
  )
}

Subtab.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Subtab
