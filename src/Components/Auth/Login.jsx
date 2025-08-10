import React, { useState } from "react";


const Login=({handleLogin})=>{
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const SubmitHandler=(e)=>{
      e.preventDefault()
      handleLogin(email,password)

     
      setEmail('')
      setPassword('')
     
     

    }
    return(

        <div   className=" flex h-screen w-screen items-center justify-center  bg-black  bg-contain gap-16">
            <div className=" flex justify-center items-center gap-3 mr-6  flex-col ">
                <h1 className=" text-white font-bold text-5xl"><span className=" text-orange-400 text-7xl">I</span>DOME LIMITED</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Voluptas, at obcaecati. Quibusdam aut fact</p>
            </div>
            <div className=" border-2 border-white p-20 rounded-2xl">
                <div className=" flex justify-center items-center">
                    <h2 className=" text-orange-400 mb-9 text-3xl font-bold">Login</h2>
                </div>
                <form 
                onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                
                className=" flex flex-col items-center justify-center gap-6"
                >
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required  className=" text-white  bg-transparent border-2 border-b-red-600 text-xl py-3 px-5 rounded-full" type="email" name="" placeholder="Enter your email" />
                    <input 
                     value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}

                    required
                    
                    className=" text-white bg-transparent border-2 border-b-red-600 text-xl py-3 px-5 rounded-full" type="password" name="" placeholder="Enter your password" />
                    <button id="login-button" className=" bg-orange-400 outline-none rounded-full font-bold text-white py-3 px-3 border-2 w-50">Log in</button>
                </form>
            </div>
        </div>

    )

}
export default Login