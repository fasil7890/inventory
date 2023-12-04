import React from 'react'
import { categoryItems } from '../../categoryData'


const Categories = () => {
  return (
    <div className='section-container py-16  bg-base-200  '>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorite</p>
            <h3 className='title'>Popular Categories</h3>
        </div>

        {/*   category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item,i)=>(
                    <div key={i} className='shadow-xl  rounded-xl w-72 h-[300px]  mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto items-center justify-center'>
                            <img src={item.image} alt={item.title} className=' w-full h-[200px] rounded-xl object-cover' />
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-red font-bold uppercase'>{item.des}</h5>
                            <p className='font-semibold'>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories