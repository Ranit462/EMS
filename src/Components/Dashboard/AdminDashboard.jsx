import Alltask from "../Other/Alltask"
import Createtask from "../Other/Createtask"
import Header from "../Other/Header"

 const AdminDashboard=(props)=>{
    return(
        <div className=" bg-black h-screen w-full p-7">
           <Header changeUser={props.changeUser}/>
           <Createtask/>
           <Alltask/>
        </div>
    )
 }
 export default AdminDashboard