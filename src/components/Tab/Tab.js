/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import Subtab from '../Subtab/Subtab'
import './Tab.css'

const Tab = ({ id, active, clickHandler, name, subtabs }) => {
  const displayClass = active ? 'active' : 'inactive'
  const [activeSubtab, setActiveSubtab] = useState(1)

  // To reset the selected subtab everytime a tab is changed
  useEffect(() => {
    setActiveSubtab(1)
  }, [active])

  return (
    <div>
      <a
        className={`${displayClass} tab-link`}
        onClick={() => clickHandler(id)}
      >
        {name}
      </a>
      <ul className="tab-list">
        {active &&
          subtabs?.map(({ id: subtabId, name: subtabName, content }) => (
            <li key={subtabId} className="list-item">
              <Subtab
                id={subtabId}
                name={subtabName}
                content={content}
                clickHandler={setActiveSubtab}
                active={activeSubtab === subtabId}
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
  subtabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
}

export default Tab
