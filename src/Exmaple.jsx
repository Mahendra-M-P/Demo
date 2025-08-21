import React,{useState} from 'react'

import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { IoHeadsetSharp } from "react-icons/io5";

export default function Exmaple() {
      const [count,setcount]=useState(0)

      let card = [
        {
            "text": "Member onsite",
            "number": count +10,
            "logo": <CgProfile size={70}/>
        },
        {
            "text": "Unpadi invoices",
            "number": count +2,
            "logo": <LiaFileInvoiceSolid size={70}/>
        },
        {
            "text": "Unread message",
            "number": count +23,
            "logo": <IoMailUnread size={70} />
        },
        {
            "text": "Your Ticks",
            "number": count + 101,
            "logo": <TbCardsFilled size={70}/>
        },

    ]

  return (
    <div className='flex'>
        <div className='flex flex-col items-center bg-red-400  h-[100vh] w-[10vh]'>
             <div><FaArrowRightToBracket className='size-6 my-[10px] hover:my-[20px]'/></div>
            <div><HiOutlineSparkles className='  size-6  my-[10px] hover:my-[20px]'/></div>
            <div><IoPeopleSharp className=' size-6  my-[10px] hover:my-[20px]'/></div>
            <div><IoHeadsetSharp className=' size-6  my-[10px] hover:my-[20px]'/></div> 
        </div>
        <div className=' '>
             <div className='bg-green-400 w-[205vh] h-[20vh]   '>
                  <div className='bg-amber-300 flex justify-between h-[20vh] items-center'>
                     <div className='pl-[10px] pt-[5px] font-bold'><h1>Hi bro</h1></div>
                     <div className=''>
                         <button className='rounded-[50%] h-[50px] w-[50px] bg-amber-400 mr-[10px]'>+</button>
                        <button className='rounded-[50%] h-[50px] w-[50px] bg-amber-400 mr-[10px]'>-</button>
                    </div>
                 </div> 
             </div>
            <div className='h-[80vh] w-full bg-amber-700'>
                {
                    card.map(e => 
                    {
                        return <div>
                            <div className='h-[100px] w-[80px] bg-blue-600' >
                                {e.text}
                            </div>
                        </div>
                    }
                    )
                }
            </div> 
        </div>
        <div className=''></div>
        
    </div>
  )
}
