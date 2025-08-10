import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthPovider"

const AcceptTask=({data})=>{
    
    return(
         <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl" >
                <div className="flex justify-between items-center">
                    <h3 className=" bg-red-600 px-3 py-1 rounded text-white">{data.category}</h3>
                    <h4 className=" text-white">{data.date}</h4>

                </div>
                <h2 className=" mt5 text-2xl font-semibold">{data.title}</h2>
                <p className=" mt-2 text-white">{data.description}</p>
                <div className=" flex justify-between mt-4">
                    <button className=" bg-green-800 py-3 px-2 text-sm rounded-2xl text-white">Mark as Completed</button>
                    <button 
                         
                     className=" bg-red-800 py-1 px-2 text-sm rounded-2xl text-white"> Mark as Failled</button>
                </div>
                

            </div>

    )
}
export default AcceptTask