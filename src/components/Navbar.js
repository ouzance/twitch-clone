import React from 'react'
import { FaTwitch } from 'react-icons/fa';
import { Icon } from '../icons';
import User from '../img/user.png';


const Navbar = () => {
    return (
        <nav className='h-[3.125rem] w-full flex items-center justify-center shadow'>
            <div className='h-full flex w-64 justify-center items-center '>
                <div className='basis-[3.125rem] h-full flex items-center justify-center'>
                    <FaTwitch color='#9147ff' size={28} />
                </div>
                <div className='h-full text-sm font-semibold flex-1 flex'>
                    <div className='mx-2 h-full flex items-center justify-center'>
                        <a className='hover:text-color-text-link' href='#' >Takip Edilen</a>
                    </div>
                    <div className='mx-2 h-full flex items-center justify-center'>
                        <a className='hover:text-color-text-link' href='#'>Gözat</a>
                    </div>
                </div>
                <div className='basis-[3.125rem]'>
                    <button className='w-[1.875rem] h-[1.875rem] hover:bg-color-background-button-hover rounded flex items-center justify-center'>
                        <Icon size={20} name="more" />
                    </button>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <div className='flex items-center justify-center w-[25rem] gap-px'>
                    <input className='outline-0 bg-color-background-button-hover flex-1 h-9 px-4 py-2 text-color-text-input leading-3 rounded-l-md hover:shadow-search transition-shadow' type="search" placeholder='Ara' />
                    <div>
                        <button className='bg-color-background-button h-9 w-[2.125rem] flex items-center justify-center rounded-r-md hover:bg-color-background-button-hover'>
                            <Icon size={24} name="search" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                    <button className='h-[1.875rem] w-[1.875rem] relative flex items-center justify-center hover:bg-color-background-button-hover rounded-md'>
                        <Icon name='prime' size={20} />
                        <span className='absolute -right-1/4 -top-1/4 bg-color-background-red text-xs font-semibold px-2 rounded-full text-white border-2 border-white'>
                            42
                        </span>
                    </button>
                </div>
                <div>
                    <button className='h-[1.875rem] w-[1.875rem] relative flex items-center justify-center hover:bg-color-background-button-hover rounded-md'>
                        <Icon name='notification' size={20} />
                        <span className='absolute -right-1/4 -top-1/4 bg-color-background-red text-xs font-semibold px-2 rounded-full text-white border-2 border-white'>
                            9
                        </span>
                    </button>
                </div>
                <div>
                    <button className='h-[1.875rem] w-[1.875rem] relative flex items-center justify-center hover:bg-color-background-button-hover rounded-md'>
                        <Icon name='whisper' size={20} />
                        
                    </button>
                </div>
                <div>
                    <button className='h-[1.875rem] bg-color-background-button p-1.5 flex items-center justify-center hover:bg-color-background-button-hover rounded-md'>
                        <Icon name='bit' size={20} />
                        <span className='font-semibold text-sm ml-0.5'>Bit Al</span>
                    </button>
                </div>
                <div className='relative w-[1.875rem] mr-2'>
                    <img src={User} className='w-[1.875rem] rounded-full' />
                    <div className='w-2.5 h-2.5 bg-[#00f593] rounded-full absolute right-0 bottom-0 border-2 border-white'></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
