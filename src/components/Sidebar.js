import React, { useState, useRef, useEffect } from 'react'
import { Icon } from '../icons';
import User from './Sidebar/User';
import { Data } from '../Data/followingStreamers';

const Sidebar = () => {
    const [count, setCount] = useState(5)
    const [followingChannels, setFollowingChannels] = useState([])
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data.sort((a, b) => b.viewersCount - a.viewersCount))
    })

    useEffect(() => {
        setFollowingChannels(data.slice(0, count))
        console.log(data)
    },[])

    const incrementCount = () => {
        if (count + 10 < data.length) {
            setCount(count + 10)
        }
        else if (count + 10 === data.length) {
            setCount(count + 10)
            // sona geldi butonu gizle
        }
    }

    const decrementCount = () => {
        if (count - 10 > 5) {
            setCount(count - 10)
        }
        else if (count - 10 === 5) {
            setCount(count - 10);
            // basa geldi butonu gizle
        }
    }

    return (
        <div className='w-60 h-full fixed bg-color-background-sidebar '>
            <section>
                <div className='flex items-center justify-between p-2'>
                    <h5 className='text-xs font-semibold uppercase leading-6 tracking-wide'>TAKİP EDİLEN KANALLAR</h5>
                    <button className='w-[1.875rem] h-[1.875rem] hover:bg-[#d7d7d8] rounded flex items-center justify-center'>
                        <Icon name='collapse' size={20} />
                    </button>
                </div>
                <div className='min-h-[13.125rem] overflow-hidden'>
                    {
                        followingChannels.map((user, index) => {
                            return (
                                <User key={index} user={user} />
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-between py-2 px-4 text-color-text-link'>
                    <button onClick={() => { incrementCount() }} className='text-xs hover:underline'>Daha Fazla Göster</button>
                    <button className='text-xs hover:underline'>Daha Az Göster</button>
                </div>
            </section>
            <section>
            </section>
            <section>

            </section>
        </div>
    )
}

export default Sidebar
