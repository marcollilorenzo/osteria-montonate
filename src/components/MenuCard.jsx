import React, { useRef } from 'react';

function MenuCard({ data }) {

    const tooltip = useRef()

    return (
        <article className='bg-white shadow-lg rounded-lg m-4 md:m-6'>
            <div className='relative rounded-lg overflow-hidden group'>
                <div className='group-hover:scale-105  absolute object-cover h-[20vh] w-full rounded-lg bg-black opacity-30'></div>
                <img src={data.image} alt={data.categoryName} className=' duration-700 transition group-hover:scale-105 object-cover h-[20vh] w-full rounded-lg' />
                <h2 className='top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 absolute font-bold text-4xl py-4 text-center text-white'>{data.categoryName}</h2>

            </div>
            {
                data.dishes.map((item) => {
                    return (
                        <div className='flex justify-between p-4'>
                            <div className='flex flex-col justify-center items-start mr-2'>

                                <p className='text-xl'>{item.name}</p>

                                <div className='flex space-x-2'>
                                    {

                                        item.allergens ? (
                                            item.allergens.map((allergen) => {
                                                return (
                                                    <div className='relative group' ref={tooltip}>
                                                        <p className='absolute bottom-8 bg-osteriaRed text-white p-2 rounded-lg hidden group-hover:block'>{allergen.name}</p>
                                                        <img className='h-6 w-6 cursor-pointer' alt={allergen.image} src={allergen.image} />
                                                    </div>
                                                )
                                            })

                                        ) : (<p></p>)
                                    }
                                </div>
                            </div>
                            <p className='text text-lg'>{item.price}</p>
                        </div>
                    )
                })
            }
        </article>
    );
}

export default MenuCard;
