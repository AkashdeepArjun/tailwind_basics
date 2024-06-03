import { Link } from 'react-router-dom'





const CoursesUI = () => {

  return (

    <>

      <div className='group-hover:block absolute hidden h-auto px-4 py-6 bg-teal-700 


        transition-all '>



        <ul className='top-0 z-50 w-64 divide-y-2 divide-sky-950 *:py-4 '>




          <li className='hover:bg-gray-50 space-y-2 ' >

            <Link to='/C Language'>C Language</Link>
          </li>


          <li className='hover:bg-gray-50 space-y-2 '>

            <Link to='/java'>Java</Link>

          </li>


          <li className='hover:bg-gray-50 space-y-2'>


            <Link to='/kotlin'>Kotlin</Link>

          </li>


          <li className='hover:bg-gray-50 space-y-2'>


            <Link to='/dsa'>DSA</Link>

          </li>




        </ul>









      </div>





    </>





  )






}

export default CoursesUI
