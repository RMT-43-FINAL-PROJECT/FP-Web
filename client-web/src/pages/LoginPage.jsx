import React from "react";
import logo from '../assets/logoFix.svg'
const LoginPage = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="rounded-xl bg-gray-500 bg-opacity-10 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 border-2 border-white">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src={logo}
              width="200"
              alt=""
            />
            <h1 className="mb-2 text-2xl font-serif">Sahabat Pasar</h1>
            <span className="text-gray-300 font-mono">Enter Login Details</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg border-2 border-white rounded-3xl">
              <input
                className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-neutral-400 shadow-lg outline-none backdrop-blur-md font-mono "
                type="text"
                name="name"
                placeholder="input your email"
              />
            </div>

            <div className="mb-4 text-lg border-2 border-white rounded-3xl">
              <input
                className="rounded-3xl border-none bg-black bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-neutral-400 shadow-lg outline-none backdrop-blur-md font-mono"
                type="Password"
                name="name"
                placeholder="input your password"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-white bg-opacity-80 px-10 py-2 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-green-200 font-mono"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
