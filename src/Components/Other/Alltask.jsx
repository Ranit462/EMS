import { useContext } from "react"
import { AuthContext } from "../../Context/AuthPovider"

const Alltask=()=>{
    const [userData,setUserData]=useContext(AuthContext)
    return(
        <div   id="alltaskbox" className=" bg-black p-5 rounded mt-5 h-80 overflow-auto " >
            <div className=" bg-red-200 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className=" text-lg font-medium text-blue-700 w-1/5">Employee Name</h2>  
                <h2 className=" text-lg font-medium  text-yellow-700 w-1/5">New Task</h2>  
                <h2 className=" text-lg font-medium  text-purple-800  w-1/5">Active Task</h2>  
                <h2 className=" text-lg font-medium  text-green-800 w-1/5">Completed Task</h2>   
                <h2 className=" text-lg font-medium  text-red-700 w-1/5">Failed</h2>  
            </div>

            <div  className=" ">
                {userData.map(function(elem){
                    return(
                        <div className=" border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between">
                            <h2 className=" text-lg font-medium w-1/5 text-blue-600">{elem.firstName}</h2>
                            <h2 className=" text-lg font-medium w-1/5 text-yellow-700">{elem.taskCounts.newTask}</h2>
                            <h2 className=" text-lg font-medium w-1/5 text-purple-800">{elem.taskCounts.active}</h2>
                            <h2 className=" text-lg font-medium w-1/5 text-green-800">{elem.taskCounts.completed}</h2>
                            <h2 className=" text-lg font-medium w-1/5 text-red-700">{elem.taskCounts.failed}</h2>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}
export default Alltask