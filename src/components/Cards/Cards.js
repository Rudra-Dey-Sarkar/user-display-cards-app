import React, { useEffect, useState } from 'react'
import "./Cards.css"
import Details from '../Details/Details';
const key = process.env.REACT_APP_BACKEND_KEY;


function Cards() {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(false);

  async function UserInformation() {
    try {
      const response = await fetch(key);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser("Error fetching data");
        console.error("Error fetching data: ", response.statusText);
      }
    } catch (errors) {
      console.log(errors)
    }
  }

  useEffect(() => {
    UserInformation();
  }, [user]);
  return (
    <div className='flex justify-center items-center'>
      {user.length === 0 ?

        <div
        className='all w-fit lg:flex items-center lg:gap-x-7 grid gap-y-5 border-4 border-gray-600 p-7 rounded-[5px] hover:scale-105 cursor-pointer'>
        <p>Loading...</p>
        </div>
         : user==="Error fetching data" ? 
         <div
        className='all w-fit lg:flex items-center lg:gap-x-7 grid gap-y-5 border-4 border-gray-600 p-7 rounded-[5px] hover:scale-105 cursor-pointer'>
        <p>Error fetching data</p>
        </div> :        
        <div >
          <div
            className='all w-fit lg:flex items-center lg:gap-x-7 grid gap-y-5 border-4 border-gray-600 p-7 rounded-[5px] hover:scale-105 cursor-pointer'
            onClick={() => setActive(true)}>
            <div className='pic lg:m-0 m-auto'>
              <img
                src={user.results?.[0]?.picture?.large}
                alt="User Picture"
                className='rounded-[5px]' />
            </div>
            <div
              className='text-start text-[20px] bg-white font-semibold p-2 rounded-[5px] border-[3px] border-gray-700'>
              <div className='flex gap-x-2'>
                <p>Name :-</p>
                <p>{user.results?.[0]?.name?.first}</p>
                <p>{user.results?.[0]?.name?.last}</p>
              </div>
              <p>Gender :- {user.results?.[0]?.gender}</p>
              <p>Phone No. {user.results?.[0]?.phone}</p>
            </div>
          </div>

          {active === true ?
            <div
              className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
              onClick={() => setActive(false)}>
              <Details info={user} setActive={setActive} />
            </div>
            : null}

        </div>
        }
      </div>
  )
}

      export default Cards