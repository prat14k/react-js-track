import PropTypes from "prop-types"

export const Search = (props) => {
  return <div className="toolbar">
    <input className="search" type="text" value={props.searchTerm} placeholder="Search" onChange={(e) => props.updateSearchTerm(e.target.value)} />
  </div>
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func
}