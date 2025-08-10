import { useContext, useState } from "react"
import { AuthContext } from "../../Context/AuthPovider"

const Createtask=()=>{
  

     const [userData,setUserData]=useContext(AuthContext)



    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [date, setDate]=useState('')
    const [asignTo, setAsignTo]=useState('')
    const [category, setCategory]=useState('')
     
    const [newTask, setNewTask]=useState({})
   

        const SubmitHandler=(e)=>{
            e.preventDefault()
            setNewTask({date,description,title,active:false,newTask:true,failed:false,completed:false})

          const data=userData
           

           data.forEach(function(elem){
                if(asignTo==elem.firstName){
                    elem.tasks.push(newTask)
                    elem.taskCounts.newTask=elem.taskCounts.newTask+1
                   
                }
                
            })
           setUserData(data)
           console.log(data)
            
            


            setTitle('')
            setAsignTo('')
            setDate('')
            setCategory('')
            setDescription('')
            
           
        }
    


    return(
        <div className=" p-5 bg-[#1f1f1f] mt-7 rounded">
                <form 
                onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                
                
                className=" flex flex-wrap w-full items-start justify-between">
                    <div className=" w-1/2">
                    <div>
                        <h3 className=" text-sm text-gray-300 mb-0.5 "> Task Title</h3>
                        <input 
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                        
                        className=" text-sm py-1 px-2 text-white w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="text" name="" id="" />
                        </div>
                        <div>
                            <h3 className="  text-sm text-gray-300 mb-0.5 ">date</h3>
                            <input 
                             value={date}
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}
                            
                            className="  text-sm py-1 px-2  text-white w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="date" name="" id="" />
                        </div>
                        <div> 
                            <h3 className=" text-sm text-gray-300 mb-0.5 ">Asign to</h3>
                            <input 
                             value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                            
                            className="  text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="text" name="" id="" />
                        </div>
                        <div>
                            <h3 className=" text-sm text-gray-300 mb-0.5 ">Catagory</h3>
                            <input 
                              value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                            
                            className="  text-sm py-1 text-white px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" name="" id="" />
                        </div>
                        </div>

                        <div className=" w-2/5 flex flex-col items-start">
                            <h3 className=" text-sm text-gray-300 mb-0.5 ">Description</h3>
                            <textarea 
                              value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }} 
                            
                            className="w-full text-white h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
                            <button className=" bg-emerald-400 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create task</button>
                        </div>




                </form>
            </div>

    )
}
export default Createtask