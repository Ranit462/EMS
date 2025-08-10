import React from "react"
import Header from "../Other/Header"
import TasklistNum from "../Other/TasklistNum"
import Tasklist from "../Tasklist/Tasklist"


const EmployeeDashboard=(props)=>{
    return(
        <div className="p-15 bg-[#393838] h-screen" >

             <Header changeUser={props.changeUser} data={props.data}/>
           
           <TasklistNum  data={props.data}/>
            
            <Tasklist  data={props.data}/>

        </div>
    )
}
export default EmployeeDashboard