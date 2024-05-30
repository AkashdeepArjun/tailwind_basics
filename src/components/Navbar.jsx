import { Link } from "react-router-dom"
import LinksUi from "./Links"
import LogoUi from "./Logo"
import SearchBarUi from "./SearchBar"


const NavBarUi = () => {


  return (




    <>


      <div className="flex flex-col px-1 py-4 bg-green-950 relative shadow-2xl ">

        <SearchBarUi />
        <LogoUi />
        <LinksUi />


      </div>




    </>







  )
}

export default NavBarUi
