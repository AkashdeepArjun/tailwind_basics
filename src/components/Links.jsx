



import { Link } from 'react-router-dom'
import CoursesUI from './Courses'

const LinksUi = () => {


  return (


    <>

      <div className="flex flex-row absolute right-1/4 bottom-0" >


        <Link to="/" ><p className='text-yellow-400 px-4 hover:text-sky-100  '>HOME</p></Link>

        <div className='relative group dropdown'>

          <Link to="/courses"><p className='text-yellow-400 px-4 hover:text-blue-100' >COURSES</p></Link>


          <CoursesUI />

        </div>

        <Link to="/challenge"><p className='text-yellow-400 px-4 hover:text-sky-100'>CHALLENGE YOURSELF</p></Link>


        <Link to="/cry_here"><p className='text-yellow-400 px-4 hover:text-sky-100'> DISCUSS/CRY SECTION</p></Link>




      </div>



    </>










  )
}

export default LinksUi
