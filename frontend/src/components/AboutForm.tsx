import React, { FC, FormEvent, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const AboutForm: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const onChangeEventHandler = (e: any) => {
    if (e.target.value === 'good') {
      alert('Good!');
    }
    setInputVal(e.target.value);
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  const clickRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('next')
  }
  const clickLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('last')
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const handleLastName = (e: any) => {
    setInputVal(e.target.value)
  }
  useEffect(() => {
    if (inputVal.length > 12) {
      setInputVal('')
    }
  }, [inputVal])

  return (
    <div className="bg-gray-500 p-6 rounded-lg mt-3 inline-flex items-center justify-center max-w-lg space-x-7 ">
      <button onClick={clickLeft} className="block text-4xl font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&lt;</button>
      <form onSubmit={handleSubmit} className="text-base mx-8 ">
        <div className=' mb-4'>
          <label htmlFor="firstName" className="block text-left font-bold text-gray-700 mb-2">First name</label>
          <input type="text" name="firstName" placeholder="Your first name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='mb-4'><label htmlFor="lastName" className="block text-left font-bold text-gray-700 mb-2">Last name</label><input onChange={handleLastName} value={inputVal} type="text" name="lastName" placeholder="Your last name..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>
        <div className='mb-4'><label htmlFor="email" className="block text-left font-bold text-gray-700 mb-2">Email</label><input type="email" id="email" name="email" placeholder="Your email..." className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" /></div>
        <div className='mb-4 relative'><label htmlFor="password" className="block text-left font-bold text-gray-700 mb-2">Password</label>
          <input type={showPassword ? "text" : 'password'} id="password" name="password" placeholder="Your password..." className="shadow appearance-none rounded w-full py-2 pl-3 pr-7 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
          <button className="absolute bg-[#33527b] inline-flex items-center justify-center text-sm h-9 w-6 right-0 hover:opacity-70 rounded-r transition-opacity duration-300" onClick={togglePasswordVisibility} > {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
        </div>
      </form>
      <button onClick={clickRight} className="block text-4xl  font-extrabold text-gray-600 cursor-pointer hover:text-gray-700 active:text-gray-400">&gt;
      </button>
    </div>
  )
};
