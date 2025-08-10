

const Header=(props)=>{

    const logOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
      // window.location.reload()
        
     
    }
   
    return(
        <div className=" flex items-end justify-between">
            <h1 className="text-2xl font-medium text-white">Hellow <br /> <span className="text-4xl font-semibold text-white">Username👋</span> </h1>
            <button id="Logout-button" onClick={logOutUser} className=" bg-red-500 text-white px-5 py-3 rounded-3xl">Log Out</button>
        </div>

    )
}
export default Header