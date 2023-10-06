function Episode({ name, air_date }) {
    return (
       <div className="min-w-[350px] border border-gray-400 rounded-md inline-grid p-2">
         <div className='flex items-center'>
            <p className=' text-base'>Name: </p>
            <p className=' text-sm ml-4'>{name}</p>
        </div>
        <div className='flex items-center'>
            <p className=' text-base'>Air Date: </p>
            <p className=' text-sm ml-4'>{air_date}</p>
        </div>
       </div>
    );
}

export default Episode;