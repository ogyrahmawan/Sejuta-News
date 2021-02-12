import {useParams} from 'react-router-dom'

const Navbar = ({handleToggleList}) => {
  const category = useParams().category

  const toggleListHandle = () => {
    handleToggleList()
  }

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <h5>SEJUTA CITA</h5>
      </div>
      <div className="category-sign-nav">
        <h4>{category}</h4>
        <div className="dropdown-list">
          <i onClick={() => toggleListHandle()} className="fas fa-chevron-circle-down"></i>
          <p className="tooltiptext">more category</p>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navbar