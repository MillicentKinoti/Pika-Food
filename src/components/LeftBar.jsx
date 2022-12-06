import React from 'react'
import { LeftRoutes } from '../routes'
import { ArrowRightCircleIcon} from '@heroicons/react/24/outline'
import{
  useNavigate
} from 'react-router-dom'
function LeftBar() {
  //declare it globally to avoid repetition
  const navigation = useNavigate()
  
  const roundButtonStyle = "rounded-full hover:bg-orange-600 w-10 h-10 items-center justify-center flex flex-row m-5 "
  
  function LeftRouteCard({item}){
    return(

      <div
      onClick={() =>
      navigation(item?.route)
      }
      className={
        roundButtonStyle
      }
      >
        
      </div>
    )
  } //end of LeftRouteCard - incomplete code - clicking buttons to for rerouting url

  return (
    
    <div
     className="h-screen w-32 bg-white-600 items-center justify-center shadow-2xl"
    >
      {/*render left bar items */}
   {LeftRoutes ?.map((item,index) =>
      <div key={index}
       className={roundButtonStyle}
       >{/*start of className */}

          {item?.icon}
   </div>

   )}

    {/* logout*/}
    <div className="rounded-full hover:bg-orange-600 w-10 bg-gray h-10 items-center justify-center flex flex-row m-5 absolute bottom-2" >
    <ArrowRightCircleIcon className="h-6 w-6 text-gray-500 hover:text-white"/>

    </div>


    </div>//end of [iconHouse div]
  )
}

export default LeftBar