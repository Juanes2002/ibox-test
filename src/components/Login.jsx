// components/Login.js
"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAndToken } from '../app/redux/features/authSlice';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { Allerta } from 'next/font/google';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const some = useSelector((state) => state.auth); 

  const loginManage = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/auth");
      const tokenAuth = response.data.data.acces_token;
      const responseAuthService = await axios.post("/api/authService", {
        username,
        password,
        tokenAuth,
      });
      console.log(username, password, tokenAuth)     
      const tokenService = responseAuthService.data.data.acces_token;
      dispatch(setUserAndToken({user: username, token: tokenService}))
      redirect("/timeLine");
    } catch (error) {
      console.log('Username or Password incorrect')
    }
  }
  
  useEffect(() => {
    console.log("", some);
  },[some])

  useEffect(() =>{
    dispatch(setUserAndToken({user: username, token: password}))
  }, [username, password, dispatch])

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
        Login
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label className="block text-sm font-medium leading-6 text-black">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-black/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={loginManage}
          >
           Login
          </button>
        </div>
      </form>
    </div>
  </div>
    // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
    //   <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
    //   <form onSubmit={loginManage}>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       className="block text-sm font-medium leading-6 text-gray-900"
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit" className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
