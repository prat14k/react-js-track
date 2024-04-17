/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

const Subtab = (props) => {
  const displayClass = props.active ? 'active' : 'inactive'

  return (
    <>
      <a
        className={`${displayClass} tab-link`}
        onClick={() => props.clickHandler(props.id)}
      >
        {props.name}
      </a>
      {props.active && props.content}
    </>
  )
}

export default Subtab