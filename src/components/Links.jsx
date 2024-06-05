



import { Link } from 'react-router-dom'
import CoursesUI from './Courses'

import '../css/LinksUi.css'

const LinksUi = () => {


  return (


    <>

      <div className="flex flex-row h-2 absolute bottom-4 sm:max-xl:top-0 left-1/4 max-sm:*:text-xs max-md:text-md *:text-nowrap" >





        <Link to="/" ><p className='text-yellow-400 max-sm:px-2 px-4 hover:text-sky-100  '>HOME</p></Link>

        <div className='relative group dropdown'>

          <Link to="/courses/catalogue"><p className='text-yellow-400 max-sm:px-2 px-4 hover:text-blue-100' >COURSES</p></Link>


          <CoursesUI />

        </div>

        <Link to="/challenge"><p className='text-yellow-400 max-sm:px-2 px-4 hover:text-sky-100'>CHALLENGE YOURSELF</p></Link>


        <Link to="/cry_here"><p className='text-yellow-400 max-sm:px-2  px-4 hover:text-sky-100'> DISCUSS/CRY SECTION</p></Link>




      </div >



    </>










  )
}

export default LinksUi
