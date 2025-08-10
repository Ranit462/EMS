import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const Tasklist=({data})=>{
    return(
        <div id="tasklist" className=" h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-8">
          {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }

             

             if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }

             if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
             if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
          })}
            

           
        </div>
    )
}

export default Tasklist