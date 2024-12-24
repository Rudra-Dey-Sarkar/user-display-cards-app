import React from 'react'

function Details({ info, setActive }) {
    return (
        <div
            className='bg-white w-fit grid gap-y-2 items-center border-4 border-gray-600 p-7 rounded-[5px]'>
                
            <div
                className='flex justify-end'>
                <p
                    onClick={() => {
                        setActive(false);
                    }}
                    className='cursor-pointer'
                    >  <svg
                    fill="#000000"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490 490"
                    xmlSpace="preserve"
                  >
                    <polygon
                      points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
                    489.292,457.678 277.331,245.004 489.292,32.337"
                    />
                  </svg></p>
            </div>
            <p className='text-[30px] font-semibold underline'>User Details</p>
            <div
                className=' lg:flex lg:gap-x-7 gap-y-2 grid '>
                <img
                    src={info.results?.[0]?.picture?.large}
                    alt="info Picture"
                    className='rounded-[5px] border-[3px] border-gray-700 lg:m-0 m-auto' />
                <div
                    className='text-start text-[20px] bg-white font-semibold p-2 rounded-[5px] border-[3px] border-gray-700'>
                    <div className='flex gap-x-2'>
                        <p>Name :-</p>
                        <p>{info.results?.[0]?.name?.first}</p>
                        <p>{info.results?.[0]?.name?.last}</p>
                    </div>
                    <p>Gender :- {info.results?.[0]?.gender}</p>
                    <p>Phone No. {info.results?.[0]?.phone}</p>
                    <p>Cell No. {info.results?.[0]?.cell}</p>
                    <p>Email ID. {info.results?.[0]?.email}</p>
                </div>
            </div>

            <div
                className='text-start text-[20px] bg-white font-semibold p-2 rounded-[5px] border-[3px] border-gray-700'>

                <p>Country :- {info.results?.[0]?.location?.country}</p>
                <p>State :- {info.results?.[0]?.location?.state}</p>
                <p>City :- {info.results?.[0]?.location?.city}</p>
                <p>Street :- {info.results?.[0]?.location?.street?.number} {info.results?.[0]?.location?.street?.name}</p>
                <p>Postcode :- {info.results?.[0]?.location?.postcode}</p>
            </div>
        </div>

    )
}

export default Details