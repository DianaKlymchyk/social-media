'use client'
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowDown } from 'react-icons/ai';
import axios from "axios";
interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegistryForm = () => {
  const [invisible, setInvisible] = useState(true)
  const [block, setBlock] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [validName, setValidName] = useState({
    isValid: true,
    message: ""
  });
  const [formData, setFormData] = useState<FormData>({
    username: 'exampleName',
    email: 'example@gmail.com',
    password: 'examplePassword'
  });

  const togglePasswordVisibility = () => {
    setInvisible(!invisible)

  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    /// !!! валідувати тут, а не в post запиті
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const openBlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isUsernameValid = formData.username.length >= 4;
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
    const isPasswordValid = formData.password.length >= 7;

    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      console.log("Not valid field")
    } else {
      console.log("Valid fields")
    }

    const items = formData.username.split(' ');
    console.log('items: ', items);
    if (!items?.[1]) {
      setValidName({isValid: false, message: "First name and last name have to separate"});
      return;
    } else {
      setValidName({isValid: true, message: ""});
    }

    // axios.post(`${process.env.HOST}:${process.env.PORT}/users`, {
      axios.post(`http://localhost:4000/users`, {
      // PersonID: 1001,
      FirstName: items?.[0],
      LastName: items?.[1],
      Password: formData.password,
      Email: formData.email
    })
      .then(function (response) {
        console.log(response);
        if (isUsernameValid && isEmailValid && isPasswordValid) {
          setBlock(true)
        }
        setErrorText("");
      })
      .catch(function (error) {
        // помилка, яку вертає бек, буде так само тут
        setErrorText(error.response.data.message || error.message)
        console.log(error);
      });
  }
  const closeBlock = () => {
    setBlock(false)
  }
  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  const handleInnerBlock = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <div className="bg-gray-500 p-8 rounded-lg shadow-md mt-3 max-w-xs w-full">
      <form onSubmit={openBlock} className='text-base'>
        <div className={`mb-4`}>
          <label htmlFor="username" className="block text-gray-700 text-base font-bold text-left mb-2">Username</label>
          <input
                 type="text" id="username" name="username"
                 value={formData.username} onChange={handleInputChange}
                 className={`${!validName.isValid ? 'border-4 border-red-500' : ''} 
                 shadow appearance-none rounded w-full py-2 bg-gray-700 px-3 
                 text-gray-200 leading-tight focus:outline-none 
                 focus:shadow-outline`} placeholder='Username' />
          <span className={`${!validName.isValid ? 'text-red-700' : ''}`}>{validName.message}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2 text-left">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow appearance-none rounded w-full py-2 bg-gray-700 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" placeholder='Email' />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700 text-base font-bold mb-2 text-left">Password</label>
          <input type={invisible ? "password" : 'text'} id="password" name="password" value={formData.password} onChange={handleInputChange} className="shadow appearance-none rounded w-full py-2 bg-gray-700 pl-3 pr-7 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" placeholder='Password' />
          <button className=" absolute bg-[#33527b] inline-flex items-center justify-center text-sm h-9 w-6 right-0 hover:opacity-70 rounded-r transition-opacity duration-300" onClick={togglePasswordVisibility} type='button' >{invisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button>
        </div>
        <div className="mt-4">
          <button type="submit"
            className="w-full bg-[#305c96] hover:bg-[#32517a] text-gray-100 p-2 rounded-md font-bold ">Register</button>
        </div>
      </form>

      {
        block && (
          <div onClick={closeBlock} className='fixed inset-0 flex items-center justify-center bg-[#141414]/50' >
            <div onClick={handleInnerBlock} className='px-14 py-10 bg-[#f3f3f3] text-gray-900 rounded-lg flex flex-col items-center justify-center' >
              <span className='mb-2 text-2xl'>Wellcome!</span>
              <div className='group flex flex-col items-center '>
                <AiOutlineArrowDown className='text-gray-500 group-hover:text-gray-800 transition-transform duration-500 mb-5 ease-in-out group-hover:translate-y-4' />
                <Link className=' text-gray-400 text-xl transition duration-300 ease-in-out hover:text-gray-900' href="/about">Go to About us..</Link>
              </div>
            </div >
          </div>
        )}

      {errorText && (
          <div className="text-red-500">{errorText}</div>
      )}
    </div>
  );
};

export default RegistryForm;
