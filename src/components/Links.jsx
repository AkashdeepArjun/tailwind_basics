



import { Link } from 'react-router-dom'

const LinksUi = () => {


  return (


    <>

      <div className="flex flex-row absolute right-1/4 bottom-0" >


        <Link to="/" ><p className='text-yellow-400 px-4 hover:text-sky-100  '>HOME</p></Link>

        <Link to="/courses"><p className='text-yellow-400 px-4 hover:text-blue-100' >COURSES</p></Link>

        <Link to="/challenge"><p className='text-yellow-400 px-4 hover:text-sky-100'>CHALLENGE YOURSELF</p></Link>


        <Link to="/cry_here"><p className='text-yellow-400 px-4 hover:text-sky-100'> DISCUSS/CRY SECTION</p></Link>




      </div>



    </>










  )
}

export default LinksUi
