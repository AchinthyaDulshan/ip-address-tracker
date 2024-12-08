import React from 'react'

const IpAddressDetails = ({ip,location,timezone,isp}) => {
    return (
        <div className='grid text-center gap-4 md:grid-cols-4 bg-white mx-auto w-4/5 md:w-10/12 lg:w-4/5 p-4 md:p-8 md:divide-x-2 2xl:w-1/2 rounded-xl shadow-lg absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 z-[1000]'>
            <div className='grid px-3 md:gap-3 gap-2'>
                <span className='text-Dark-Gray font-medium text-xs md:text-sm uppercase'>IP Address</span>
                <span className='font-bold text-lg'>{ip}</span>
            </div>
            <div className='grid px-3 md:gap-3 gap-2'>
                <span className='text-Dark-Gray font-medium text-xs md:text-sm uppercase'>Location</span>
                <span className='font-bold text-lg'>{location}</span>
            </div>
            <div className='grid px-3 md:gap-3 gap-2'>
                <span className='text-Dark-Gray font-medium text-xs md:text-sm uppercase'>Timezone</span>
                <span className='font-bold text-lg'>{timezone}</span>
            </div>
            <div className='grid px-3 md:gap-3 gap-2'>
                <span className='text-Dark-Gray font-medium text-xs md:text-sm uppercase'>ISP</span>
                <span className='font-bold text-lg'>{isp}</span>
            </div>
        </div>
    )
}

export default IpAddressDetails