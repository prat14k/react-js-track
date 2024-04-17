import { useState } from 'react'

import Tab from './Tab'
import { headerData } from '../constants'

const AllTabs = () => {
  const [activeTab, setActiveTab] = useState(1)

  const getSubTabs = (tabData) => {
    return (activeTab === tabData.id) ? tabData.subtabs : []
  };

  return (
    <ul className="navigation-list">
      {headerData?.tabs.map((tabData) => (
        <li key={tabData.id} className="list-item">
          <Tab
            id={tabData.id}
            name={tabData.name}
            subtabs={getSubTabs(tabData)}
            clickHandler={setActiveTab}
            active={activeTab === tabData.id}
          />
        </li>
      ))}
    </ul>
  )
}

export default AllTabs
