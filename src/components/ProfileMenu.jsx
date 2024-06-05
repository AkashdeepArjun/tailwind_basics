
import { IoIosStar } from "react-icons/io";

const ProfileMenuUi = () => {


  return (

    <>

      <div className=" flex flex-col  collapse divide-y absolute right-1/2 max-sm:left-1/2 top-1/2 z-50  bg-white w-56 divide-gray-600 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" id="malist">


        <div className="flex flex-row align-baseline px-10 py-5 first:float-left last:float-right" role="menuitem">


          <IoIosStar />

          <p className="font-serif ">Akash_8264</p>

        </div>


        <ul className="*:px-10 *:py-5 *:cursor-pointer" role="menuitem" >



          <li >My Profile </li>

          <li>Edit Profile </li>

          <li>Report Bug</li>

          <li>My Certificates</li>



        </ul>


        <button className="place-self-center bg-teal-900 w-16 h-8 text-white" role="menuitem">Logout</button>


      </div>




    </>




  )





}

export default ProfileMenuUi
