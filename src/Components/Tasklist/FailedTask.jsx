const FailedTask=({data})=>{
    return(
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl" >
                <div className="flex justify-between items-center">
                    <h3 className=" bg-blue-600 px-3 py-1 rounded text-white">{data.category}</h3>
                    <h4 className=" text-white">{data.date}</h4>

                </div>
                <h2 className=" mt5 text-2xl font-semibold">{data.title}</h2>
                <p className=" mt-2 text-white">{data.description}</p>
                <div className=" mt-4">
                    <button className=" text-sm text-white bg-blue-600 py-2 px-2 rounded-2xl">Complete</button>
                </div>

            </div>

    )
}
export default FailedTask