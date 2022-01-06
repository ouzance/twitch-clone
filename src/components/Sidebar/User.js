import React from 'react'

const User = ({ user }) => {

    const statusStyle = `w-[1.875rem] h-[1.875rem] rounded-full overflow-hidden ${!user.status && "grayscale"}`
    return (
        <div className=' hover:bg-[#e6e6ea] h-[2.625rem] flex items-center'>
            <a href='#' className='flex items-center w-full px-2.5 py-[0.313rem]'>
                <div className='shrink-0'>
                    <img className={statusStyle} src={user.image} />
                </div>
                <div className='flex items-center w-full relative'>
                    <div className='flex-1 ml-2'>
                        <p className='text-[#1f1f23] leading-3 text-sm font-semibold'>{user.name}</p>
                        <p className='text-[#53535f] text-sm'>{user.status ? user.game : user.newVideos}</p>
                    </div>

                    <div className='absolute -top-1 right-0'>
                        <div className='relative'>
                            {
                                user.status
                                &&
                                <div className='absolute top-1/2 -left-3 -translate-y-1/3 w-2 h-2 rounded-full bg-color-background-red'></div>
                            }
                            <div>
                                <span className='text-[#1f1f23] text-sm tracking-wide'>{user.status ? user.viewersCount : "Çevrimdışı"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default User
