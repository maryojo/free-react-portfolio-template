import React from 'react'
import { RiTwitterXLine, RiInstagramLine, RiBehanceLine, RiGithubLine, RiLinkedinBoxLine, RiDribbbleLine } from "react-icons/ri";


const SocialMedia = () => {
  return (
    <div className='flex text-[20px] flex justify-between w-[15rem] md:w-full gap-3'>
    <RiTwitterXLine className='hover:text-[#00A177] hover:cursor-pointer'/> 
    <RiInstagramLine className='hover:text-[#00A177] hover:cursor-pointer'/>
    <RiBehanceLine className='hover:text-[#00A177] hover:cursor-pointer'/>
    <RiGithubLine className='hover:text-[#00A177] hover:cursor-pointer'/>
    <RiLinkedinBoxLine className='hover:text-[#00A177] hover:cursor-pointer'/>
    <RiDribbbleLine className='hover:text-[#00A177] hover:cursor-pointer'/>
    </div>
  )
}

export default SocialMedia