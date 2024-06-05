
import { useEffect, useRef, useState } from 'react'
import icon from '../akash.svg'
import ProfileMenuUi from './ProfileMenu'


const Dp = () => {


  let d = null;

  let myopened_menu = useRef(null)

  const active_profile_menu = useRef(null)

  const [isProfileOpened, setProfileOpened] = useState(false)

  useEffect(() => {


    d = document.getElementById("malist")

    document.addEventListener("click", (e) => {


      console.clear()
      console.log("YOU CLICKED AT ", e.target)
      console.log("CURRENT DOCUMENT  ", document.activeElement)

      console.log("ACTIVE REFERENE POINTS TO ", active_profile_menu.current)


      if (myopened_menu.current.contains(e.target)) {


        //CLICKED ON MENU




      } else if (active_profile_menu.current.contains(e.target)) {



        //CLICKED ON DP

        console.log("oh ywa dp is clicked")



      } else {

        //CLICKED ANYWHERE ELSE

        if (d.classList != null) {

          d.classList.add("collapse")
          setProfileOpened(false)

        }

      }

    })




  }, [])
  const handleStuff = (event) => {



    d.classList.toggle("collapse")



  }


  return (

    <>



      <div className='relative inline size-24 place-self-end max-sm:place-self-start ' aria-expanded="true" aria-haspopup="true" >


        <img src={icon} className=' bg-white rounded-full size-16 px-2 py-2   ' onClick={(e) => handleStuff(e)} id="menu-button" ref={active_profile_menu} />





        <div ref={myopened_menu} >

          <ProfileMenuUi />

        </div>









      </div>






    </>



  )


}

export default Dp
