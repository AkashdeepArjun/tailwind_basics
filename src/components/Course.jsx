

import { FaPython } from "react-icons/fa";
import RatingsUi from "./RatingsPart";


const Course = () => {


  return (


    <>

      <div className="flex-col space-y-4 pl-4 bg-emerald-200 pt-4 pb-4 "  >

        <FaPython className="size-108" />

        <p className="font-sans text-sky-950 "  >Python Course</p>

        <p className="bg-lime-900 text-white inline p-1 text-xs" >Beginer </p>

        <RatingsUi />





      </div>









    </>

  )





}

export default Course
