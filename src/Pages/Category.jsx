import { useEffect, useState } from 'react';

import CategoryTab from './CategoryTab';

const Category = () => {
    const [type, setType]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/jobstype")
        .then(res=> res.json())
        .then(data=> setType(data))
    },[])
    console.log(type);

    return (
       <div className="bg-base-200 max-w-7xl mx-auto">
        <h1 className='text-center font-bold text-3xl mt-6 mb-6'>JOBS Category</h1>
         <div className="grid grid-cols-5">
            {
                type.map((types)=><CategoryTab key={type.id} types={types}></CategoryTab>
                )
            }
         
        </div>
       </div>
    );
};

export default Category;