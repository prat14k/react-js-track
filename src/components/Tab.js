/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import Subtab from './Subtab'

const Tab = (props) => {
  const displayClass = props.active ? 'active' : 'inactive'
  const [activeSubtab, setActiveSubtab] = useState(1)

  // To reset the selected subtab everytime a tab is changed
  useEffect(() => {
    setActiveSubtab(1)
  }, [props.active])

  return (
    <div>
      <a
        className={`${displayClass} tab-link`}
        onClick={() => props.clickHandler(props.id)}
      >
        {props.name}
      </a>
      <ul className="tab-list">
        {props.active &&
          props.subtabs?.map(({ id, name, content }) => (
            <li key={id} className="list-item">
              <Subtab
                id={id}
                name={name}
                content={content}
                clickHandler={setActiveSubtab}
                active={activeSubtab === id}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

Tab.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Tab
