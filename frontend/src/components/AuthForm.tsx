import { FC } from "react";

export const AutoForm: FC = () => {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-gray-500 text-whiteshadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none rounded w-full py-2 bg-gray-700 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border  border-gray-700 focus:border-gray-900 bg-gray-700 rounded w-full py-2 px-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-xs italic text-gray-200" >Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#305c96] hover:bg-[#32517a] text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-[#739ed7] hover:text-[#375883]" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Acme Corp. All rights reserved.
      </p>
    </div>)
}