import "./navBar.scss"
import Logo from "../../assets/icons/brand.png"
import { withRouter } from "react-router"
import React from "react"


const Navbar = (props) => {
  const [path, setpath] = React.useState(props.location.pathname)

  React.useEffect(() => {
    setpath(props.location.pathname)
  }, [props.location.pathname])
  
  const routeChange = (linkTo) => {
    props.history.push({pathname: linkTo})
    setpath(linkTo)
  }

  return (
    <div className="NavbarContainer flex">
      {/* Brand logo */}
      <img src={Logo} alt="brand logo" className="brand-container"></img>
      
      <div className="linksContainer">
        <div className="leftSideLinks">
          <span className={path === "/home" ? "NavBarLinks ActiveClass" : "NavBarLinks" }
            onClick={() => routeChange("/home")}>
            Home
          </span>
          <span className={path === "/ManageProducts" ? "NavBarLinks ActiveClass" : "NavBarLinks" } 
            onClick={() => routeChange( "/ManageProducts")}>
            Manage Products
          </span>
        </div>

        <div className="rightSideLinks">
          <div className="NavBarLinks">
            Shopping Cart
          </div>
        </div>
      </div>

    </div>
  )
}

export default withRouter(Navbar) 