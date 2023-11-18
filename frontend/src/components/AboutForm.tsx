import React, { FC, FormEvent, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const AboutForm: FC = () => {
  // const [inputVal, setInputVal] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([])

  useEffect(() => {
    // fetch(`${process.env.HOST}:${process.env.PORT}`).then(res => {
    fetch('http://localhost:4000/users').then(res => {
      return res.json();
    }).then((data) => {
      console.log('data: ', data)
      setUsers(data);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  const clickRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index < users.length - 1) {
      setIndex(prev => ++prev);
    } else {
      setIndex(0)
    }
  }
  const clickLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index > 0) {
      setIndex(prev => --prev)
    } else {
      setIndex(users.length - 1)
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
      <>
        {users?.length && users.map((user: any, idx) => {
          if (idx === index) {
            return (
                <div key={user.id} className="bg-gray-500 p-6 rounded-lg mt-3 inline-flex items-center justify-center max-w-lg space-x-7 ">
                  <button disabled={index === 0} onClick={clickLeft} className="block text-4xl font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&lt;</button>
                  <form onSubmit={handleSubmit} className="text-base mx-8 ">
                    <div className=' mb-4'>
                      <label htmlFor="firstName" className="block text-left font-bold text-gray-700 mb-2">First name</label>
                      <input value={user.FirstName} readOnly={true} type="text" name="firstName" placeholder="Your first name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor="lastName" className="block text-left font-bold text-gray-700 mb-2">Last name</label>
                      <input value={user.LastName} readOnly={true} type="text" name="lastName" placeholder="Your last name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>
                    <div className='mb-4'>
                      <label htmlFor="email" className="block text-left font-bold text-gray-700 mb-2">Email</label>
                      <input  value={user.Email} readOnly={true} type="email" id="email" name="email" placeholder="Your email..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>
                    <div className='mb-4 relative'><label htmlFor="password" className="block text-left font-bold text-gray-700 mb-2">Password</label>
                      <input  value={user.Password} readOnly={true} type={showPassword ? "text" : 'password'} id="password" name="password" placeholder="Your password..." className="shadow appearance-none rounded w-full py-2 pl-3 pr-7 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
                      <button className="absolute bg-[#33527b] inline-flex items-center justify-center text-sm h-9 w-6 right-0 hover:opacity-70 rounded-r transition-opacity duration-300" onClick={togglePasswordVisibility} > {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
                    </div>
                  </form>
                  <button disabled={index === users.length - 1} onClick={clickRight} className="block text-4xl  font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&gt;
                  </button>
                </div>
            )
          }
        })}
        {/*{users?.length && users.map((user: any) => {*/}
        {/*  return (*/}
        {/*      <div className="bg-gray-500 p-6 rounded-lg mt-3 inline-flex items-center justify-center max-w-lg space-x-7 ">*/}
        {/*        <button onClick={clickLeft} className="block text-4xl font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&lt;</button>*/}
        {/*        <form onSubmit={handleSubmit} className="text-base mx-8 ">*/}
        {/*          <div className=' mb-4'>*/}
        {/*            <label htmlFor="firstName" className="block text-left font-bold text-gray-700 mb-2">First name</label>*/}
        {/*            <input value={user.FirstName} readOnly={true} type="text" name="firstName" placeholder="Your first name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />*/}
        {/*          </div>*/}
        {/*          <div className='mb-4'>*/}
        {/*            <label htmlFor="lastName" className="block text-left font-bold text-gray-700 mb-2">Last name</label>*/}
        {/*            <input value={user.LastName} readOnly={true} type="text" name="lastName" placeholder="Your last name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>*/}
        {/*          <div className='mb-4'>*/}
        {/*            <label htmlFor="email" className="block text-left font-bold text-gray-700 mb-2">Email</label>*/}
        {/*            <input  value={user.Email} readOnly={true} type="email" id="email" name="email" placeholder="Your email..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>*/}
        {/*          <div className='mb-4 relative'><label htmlFor="password" className="block text-left font-bold text-gray-700 mb-2">Password</label>*/}
        {/*            <input  value={user.Password} readOnly={true} type={showPassword ? "text" : 'password'} id="password" name="password" placeholder="Your password..." className="shadow appearance-none rounded w-full py-2 pl-3 pr-7 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />*/}
        {/*            <button className="absolute bg-[#33527b] inline-flex items-center justify-center text-sm h-9 w-6 right-0 hover:opacity-70 rounded-r transition-opacity duration-300" onClick={togglePasswordVisibility} > {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>*/}
        {/*          </div>*/}
        {/*        </form>*/}
        {/*        <button onClick={clickRight} className="block text-4xl  font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&gt;*/}
        {/*        </button>*/}
        {/*      </div>*/}
        {/*  )*/}
        {/*})}*/}
      </>

  )
};
