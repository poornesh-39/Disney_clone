import React,{useState} from 'react'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/images.jpeg'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2';
import {HiPlus,HiDotsVertical} from 'react-icons/hi';
import HeaderItems from './HeaderItems.jsx';

function Header() {
    const [toggle,setToggle]=useState(false);
    const menuItems=[
        {name:'HOME',icon:HiHome},
        {name:'SEARCH',icon:HiMagnifyingGlass},
        {name:'ORGINALS',icon:HiStar},
        {name:'MOVIES',icon:HiPlayCircle},
        {name:'SERIES',icon:HiTv}
    ]
    return (
        <header className='w-screen text-white px-6 py-4 relative p-10' >
            <div className="absolute left-6 top-1/2 -translate-y-1/2">
                <img src={logo} className="w-[80px] md:w-[115px] object-cove rounded-[2vw]" />
            </div>
            <div className='hidden md:flex justify-center gap-8'>
                {menuItems.map((item) => (
                    <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                ))}
            </div>
            <div className='flex justify-center md:hidden gap-5'>
                {menuItems.map((item,index) =>index<3&&(
                    <HeaderItems key={item.name} name={''} Icon={item.icon} />
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItems name={''} Icon={HiDotsVertical} />
                    {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4'>
                        {menuItems.map((item,index) =>index>2&&(
                            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                        ))}
                    </div> : null}
                </div>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
                <img src={profile} className ="w-[40px] rounded-full " />
            </div>
        </header>
    )
}

export default Header